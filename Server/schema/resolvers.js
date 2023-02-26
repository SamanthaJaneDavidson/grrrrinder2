const { Dog, User, Order, Product, Category } = require("../models");
const { signToken } = require("../utils/auth");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const secret = process.env.secret;
const expiration = "2h";

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.username) {
        const user = (
          await User.find({ username: context.username })
            .populate({
              path: "orders.products",
              populate: "category",
            })
            .populate("dog")
        )[0];

        if (user.orders) {
          user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
        }

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    //Added this to find all dogs
    dog: async (parent, args, context) => {
      const res = await Dog.find().populate("dog_owner");
      console.log(res);
      return res;
    },

    //Added for Stripe
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate("category");
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("category");
    },
    order: async (parent, { _id }, context) => {
      if (context.username) {
        const user = await User.find({
          username: context.username,
        })[0].populate({
          path: "orders.products",
          populate: "category",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products");

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },

  Mutation: {
    removeDog: async (_, { dog_id }, context) => {
      const users = await User.find({ username: context.username });
      if (users.length) {
        const user = users[0];

        for (let i = 0; i < user.dog.length; i++) {
          if (user.dog[i]._id == dog_id) {
            user.dog.splice(i, 1);

            await user.save();
          }
        }

        return user;
      }

      return null;
    },

    addDog: async (_, { input }, context) => {
      const {
        dog_name,
        dog_breed,
        dog_gender,
        dog_size,
        dog_age,
        dog_vaccinations,
        dog_neuter_spayed,
        dog_temperment,
        dog_notes,
        dog_picture,
        preferred_days,
        preferred_timeofday,
        preferred_location,
      } = input;

      if (context.username) {
        const user = (
          await User.find({ username: context.username }).populate("dog")
        )[0];

        if (user) {
          const dog = await Dog.create({
            dog_name,
            dog_breed,
            dog_gender,
            dog_size,
            dog_age,
            dog_vaccinations,
            dog_neuter_spayed,
            dog_temperment,
            dog_notes,
            dog_picture,
            dog_owner: user._id,
            preferred_days,
            preferred_timeofday,
            preferred_location,
          });

          user.dog.push(dog._id);

          await user.save();

          return (
            await User.find({ username: context.username }).populate("dog")
          )[0];
        }
      }

      return null;
    },
    saveDog: async (_, {dog_id}, context) => {
      if (context.username) {
        const user = (
          await User.find({ username: context.username })
        )[0];

        if (user) {
          let alreadyHas = false;
          for (const id in user.saved_dogs) {
            if (id === dog_id) {
              alreadyHas = true;
            }
          }

          if (!alreadyHas) {
            user.saved_dogs.push(dog_id);
            await user.save();
          }

          return (await User.find({ username: context.username }).populate('dog'))[0]
        }
      }
    },
    addUser: async (_, { username, email, password }) => {
      let token = jwt.sign(
        {
          data: { username },
        },
        secret,
        { expiresIn: expiration }
      );

      return {
        token,
        user: await User.create({
          username,
          email,
          password,
          token,
          dog: [],
          orders: [],
          saved_dogs: [],
        }),
      };
    },

    //Added for Stripe
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.username) {
        const order = new Order({ products });

        await User.findOneAndUpdate(
          { username: context.username },
          { $push: { orders: order } }
        );

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },

    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },

    login: async (_, { username, password }) => {
      const users = await User.find({ username });

      if (users.length) {
        const user = users[0];

        if (await bcrypt.compare(password, user.password)) {
          let token = jwt.sign(
            {
              data: { username: user.username },
            },
            secret,
            { expiresIn: expiration }
          );

          user.token = token;
          await user.save();

          return {
            token,
            user,
          };
        } else {
          console.log("bad pword");
        }
      } else {
        console.log("no user");
      }

      return null;
    },
  },
};

module.exports = resolvers;
