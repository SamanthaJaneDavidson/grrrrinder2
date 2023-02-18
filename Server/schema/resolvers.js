const { Dog, User } = require("../models");
const { signToken } = require("../utils/auth");
const mongoose = require('mongoose');
const { AuthenticationError } = require('apollo-server-express');

// const resolvers = {
//   Query: {
//     user: async () => {
//       return User.find().populate("dog");
//     },

//     user: async (parent, { username }) => {
//       return User.findOne({ username }).populate("dog");
//     },

//     dog: async (parent, { username }) => {
//       const params = username ? { username } : {};
//       return Dog.find(params).sort({ createdAt: -1 });
//     },
//     dog: async (parent, { dogId }) => {
//       return Dog.findOne({ _id: dogId });
//     },
//     me: async (parent, args, context) => {
//       if (context.user) {
//         return User.findOne({ _id: context.user._id }).populate("dog");
//       }
//       throw new AuthenticationError("You need to be logged in!");
//     },
//   },

//   Mutation: {
//     addUser: async (parent, { username, email, password, zipcode }) => {
//       const user = await User.create({ username, email, password, zipcode });
//       const token = signToken(user);
//       return { token, user };
//     },
//     login: async (parent, { username, password }) => {
//       const user = await User.findOne({ username });

//       if (!user) {
//         throw new AuthenticationError("No user found with this email address");
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError("Incorrect credentials");
//       }

//       const token = signToken(user);

//       return { token, user };
//     },
//     addDog: async (parent, { owner_id }, dog_name, dog_breed, dog_gender, dog_size, dog_age, dog_vaccinations, dog_neuter_spayed, dog_temperment,
//       dog_notes, dog_picture, preferred_days, preferred_timeofday, preferred_location, context) => {
//       if (context.user) {
//         const thought = await Dog.create({
//           dog_name, 
//           dog_breed, 
//           dog_gender, 
//           dog_size, 
//           dog_age, 
//           dog_vaccinations, 
//           dog_neuter_spayed, 
//           dog_temperment,
//           dog_notes, 
//           dog_picture, 
//           preferred_days, 
//           preferred_timeofday, 
//           preferred_location,
//         });

//         await User.findOneAndUpdate(
//           { _id: context.user._id },
//           { $addToSet: { dog: dog._id } }
//         );

//         return dog;
//       }
//       throw new Error("You need to be logged in!");
//     },
//     addDog: async (parent, { owner_Id }, context) => {
//       if (context.user) {
//         return Dog.findOneAndUpdate(
//           { _id: dogId },
//           {
//             $addToSet: {
//               Dog: { dog_name, dog_breed, dog_gender, dog_size, dog_age, dog_vaccinations, dog_neuter_spayed, dog_temperment,
//                 dog_notes, dog_picture, preferred_days, preferred_timeofday, preferred_location: context.user.username },
//             },
//           },
//           {
//             new: true,
//             runValidators: true,
//           }
//         );
//       }
//       throw new Error("You need to be logged in!");
//     },
//     removeDog: async (parent, { dog_id }, context) => {
//       if (context.username) {
//         const dog = await Dog.findOneAndDelete({
//           _id: dog_id,
//         });

//         await User.findOneAndUpdate(
//           { username: context.username },
//           { $pull: { dog: dog._id } }
//         );

//         return dog;
//       }
//       throw new AuthenticationError("You need to be logged in!");
//     },
//     removeDog: async (parent, { owner_Id }, context) => {
//       if (context.user) {
//         return Dog.findOneAndUpdate(
//           { _id: dogId },
//           {
//             $pull: {
//               dog: {
//                 _id: dogId,
//               },
//             },
//           },
//           { new: true }
//         );
//       }
//       throw new Error("You need to be logged in!");
//     },
//   },
// };

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      const username = context.username;
      
      const users = await User.find({username});
      
      return users[0];
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

      return;
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
        owner_id,
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
            owner_id,
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

    login: async (_, { username, email, password }) => {
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
