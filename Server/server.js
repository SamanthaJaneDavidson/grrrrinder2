const express = require("express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");
//Needed to implemented the Apollo Server and apply it to the Express server as middleware
const { ApolloServer } = require("apollo-server-express");
const bcrypt = require("bcrypt-promise");
const { applyMiddleware } = require("./utils/auth");
const { typeDefs } = require("./schema");
const { User } = require("./models");
const crypto = require("crypto");
const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      const username = context.username;
      
      const users = await User.find({username});
      
      return users[0];
    },
  },

  Mutation: {
    removeDog: async (_, { dogId, token }) => {
      const users = await User.find({token});
      if (users.length) {
        const user = users[0];

        for (let i = 0; i < user.savedDogs.length; i++) {
          if (user.savedDog[i].dogId == dogId) {
            user.savedDog.splice(i, 1);

            await user.save();
          }
        }

        return user;
      }

      return;
    },

    saveDog: async (_, { input, token }) => {
      const { 
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
        owner_id,
        preferred_days,
        preferred_timeofday,
        preferred_location } = input;

      const users = await User.find({token});
      if (users.length) {
        const user = users[0];

        user.savedDog.push({
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

function authMiddleware ({ req }) {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    
    req.username = data.username;
  } catch {
    console.log('Invalid token');
  }

  return req;
}

//Implemented the Apollo Server and apply it to the Express server as middleware
const server = new ApolloServer({ typeDefs, resolvers, context: authMiddleware });

(async () => {
  await server.start();

  const app = express();
  const PORT = process.env.PORT || 3001;

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  server.applyMiddleware({ app });

  // if we're in production, serve client/build as static assets
  // if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "../client/build")));
  // }

  app.use(routes);

  db.once("open", async () => {
    app.listen(PORT, () =>
      console.log(`🌍 Now listening on http://localhost:${PORT}`)
    );
  });
})();
