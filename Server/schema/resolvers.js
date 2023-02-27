const { Dog, User, Order, Product, Category } = require("../models");
const { signToken } = require("../utils/auth");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// require('dotenv').config(); -Moved to server.js

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
            .populate("saved_dogs")
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

    //Specifically for stripe
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate('products');
      const mug = await stripe.products.create({
        name: "grrrrinder mug",
        description: "mug",
        images: [`${url}/images/GrinderMug.png`]
      });

      const mugPrice = await stripe.prices.create({
        product: mug.id,
        unit_amount: 10 * 100,
        currency: 'usd',
      });

      //Need this line to talk to the front-end
      line_items.push({
        price: price.id,
        quantity: 1
      });

      const shirt = await stripe.products.create({
        name: "grrrrinder t-shirt",
        description: "t-shirt",
        images: [`${url}/images/GrinderTshirt.png`]
      });
      const shirtPrice = await stripe.prices.create({
        product: shirt.id,
        unit_amount: 10 * 100,
        currency: 'usd',
      });

      //Need this line to talk to the front-end
      line_items.push({
        price: price.id,
        quantity: 1
      });
  
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

        for (let i = 0; i < user.saved_dogs.length; i++) {
          if (user.saved_dogs[i]._id == dog_id) {
            user.saved_dogs.splice(i, 1);

            await user.save();
          }
        }

        return user;
      }

      return null;
    },

    deleteDog: async (_, {dog_id}, context) => {
      const users = await User.find({ username: context.username }).populate('dog');
      console.log('starting');
      if (users.length) {
        const user = users[0];
        const dog = await Dog.findById(dog_id);

        console.log('Got user');
        if (!dog) {
          return null;
        }

        console.log('got dog');
        console.log(dog.dog_owner);
        console.log(user._id);

        if (!user._id.equals(dog.dog_owner)) {
          return null;
        }

        console.log('is owned by user');

        await Dog.findByIdAndRemove(dog_id);

        for (let i = 0; i < user.dog.length; i++) {
          if (user.dog[i]._id.equals(dog._id)) {
            user.dog.splice(i, 1);

            await user.save();
          }
        }

        const allUsers = await User.find().populate('saved_dogs');
        for (const otherUser of allUsers) {
          for (let i = 0; i < otherUser.saved_dogs.length; i++) {
            if (otherUser.saved_dogs[i]._id.equals(dog._id)) {
              otherUser.saved_dogs.splice(i, 1);
  
              await otherUser.save();
            }
          }
        }

        return user;
      }
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
