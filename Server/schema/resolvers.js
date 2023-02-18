const { Dogs, User } = require("../models");
const { signToken } = require("../utils/auth");
const mongoose = require('mongoose');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    user: async () => {
      return User.find().populate("dogs");
    },

    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("dogs");
    },

    dogs: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Dogs.find(params).sort({ createdAt: -1 });
    },
    dogs: async (parent, { dogId }) => {
      return Dogs.findOne({ _id: dogId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("dogs");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password, zipcode }) => {
      const user = await User.create({ username, email, password, zipcode });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addDog: async (parent, { owner_id }, dog_name, dog_breed, dog_gender, dog_size, dog_age, dog_vaccinations, dog_neuter_spayed, dog_temperment,
      dog_notes, dog_picture, preferred_days, preferred_timeofday, preferred_location, context) => {
      if (context.user) {
        const thought = await Dogs.create({
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
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { dogs: dogs._id } }
        );

        return dogs;
      }
      throw new Error("You need to be logged in!");
    },
    addDog: async (parent, { owner_Id }, context) => {
      if (context.user) {
        return Dogs.findOneAndUpdate(
          { _id: dogId },
          {
            $addToSet: {
              Dogs: { dog_name, dog_breed, dog_gender, dog_size, dog_age, dog_vaccinations, dog_neuter_spayed, dog_temperment,
                dog_notes, dog_picture, preferred_days, preferred_timeofday, preferred_location: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new Error("You need to be logged in!");
    },
    removeBook: async (parent, { ownerId }, context) => {
      if (context.user) {
        const dog = await Dogs.findOneAndDelete({
          _id: dogId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { dogs: dogs._id } }
        );

        return dog;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeDog: async (parent, { owner_Id }, context) => {
      if (context.user) {
        return Dogs.findOneAndUpdate(
          { _id: dogId },
          {
            $pull: {
              dogs: {
                _id: dogId,
              },
            },
          },
          { new: true }
        );
      }
      throw new Error("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
