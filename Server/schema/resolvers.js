const { Dog, User } = require("../models");
const { signToken } = require("../utils/auth");
const mongoose = require('mongoose');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    user: async () => {
      return User.find().populate("dog");
    },

    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("dog");
    },

    dog: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Dog.find(params).sort({ createdAt: -1 });
    },
    dog: async (parent, { dogId }) => {
      return Dog.findOne({ _id: dogId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("dog");
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
    addDog: async (parent, { owner_id }, dogID, dog_name, dog_breed, dog_gender, dog_size, dog_age, dog_vaccinations, dog_neuter_spayed, dog_temperment,
      dog_notes, dog_picture, preferred_days, preferred_timeofday, preferred_location, context) => {
      if (context.user) {
        const thought = await Dog.create({
          dogID,
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
          { $addToSet: { dog: dog._id } }
        );

        return dog;
      }
      throw new Error("You need to be logged in!");
    },
    addDog: async (parent, { owner_Id }, context) => {
      if (context.user) {
        return Dog.findOneAndUpdate(
          { _id: dogId },
          {
            $addToSet: {
              Dog: { dogID, dog_name, dog_breed, dog_gender, dog_size, dog_age, dog_vaccinations, dog_neuter_spayed, dog_temperment,
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
        const dog = await Dog.findOneAndDelete({
          _id: dogId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { dog: dog._id } }
        );

        return dog;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeDog: async (parent, { owner_Id }, context) => {
      if (context.user) {
        return Dog.findOneAndUpdate(
          { _id: dogId },
          {
            $pull: {
              dog: {
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
