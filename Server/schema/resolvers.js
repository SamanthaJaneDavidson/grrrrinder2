const { Dog, User } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const secret = process.env.secret;
const expiration = '2h';

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      const username = context.username;
      
      const users = await User.find({username});
      
      return users[0];
    },
    //Added this to find all dogs
    dog: async (parent, args, context) => {
      if (!context.username) {
        return null;
      }

      const dogs = await Dog.find();
      
      return dogs;
    },
  },

  Mutation: {
    removeDog: async (_, { dog_id }, context) => {
      const users = await User.find({username: context.username});
      if (users.length) {
        const user = users[0];

        for (let i = 0; i < user.savedDog.length; i++) {
          if (user.savedDog[i].dogId == dog_id) {
            user.savedDog.splice(i, 1);

            await user.save();
          }
        }

        return user;
      }

      return null;
    },

    saveDog: async (_, { input }, context) => {
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
        dog_owner,
        preferred_days,
        preferred_timeofday,
        preferred_location } = input;

      const users = await User.find({username: context.username});
      if (users.length) {
        const user = users[0];

        user.savedDog.push({
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
            dog_owner,
            preferred_days,
            preferred_timeofday,
            preferred_location
        });

        await user.save();

        return user;
      }

      return null;
    },
    addUser: async (_, { username, email, password }) => {
      let token = jwt.sign({
        data: { username }
      }, secret, { expiresIn: expiration });

      return {
        token,
        user: await User.create({
          username,
          email,
          password,
          token,
          savedDog: [],
        }),
      };
    },

    login: async (_, { username, password }) => {
      const users = await User.find({ username });
      
      if (users.length) {
        const user = users[0];

        if (await bcrypt.compare(password, user.password)) {
          let token = jwt.sign({
            data: { username: user.username }
          }, secret, { expiresIn: expiration });

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
