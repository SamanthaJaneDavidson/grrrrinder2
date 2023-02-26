require('dotenv').config();
const express = require("express");
const path = require("path");
const db = require("./config/connection");
// const routes = require("./routes");
//Needed to implemented the Apollo Server and apply it to the Express server as middleware
const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("./utils/auth");
const { typeDefs } = require("./schema");
const resolvers = require("./Schema/resolvers");
const { Server } = require("socket.io");
const { User } = require("./models");


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

  // app.use(routes);

  db.once("open", async () => {
    const httpServer = app.listen(PORT, () =>
      console.log(`🌍 Now listening on http://localhost:${PORT}`),
      // Added to connect to GraphQL's Apollo Sandbox
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    );

    // Socket.io
    const io = new Server(httpServer);

    io.on('connection', function(socket){
      console.log('a user connected');
      socket.on('disconnect', function(){
        console.log('User Disconnected');
      });
      socket.on('message', async (msg, to, token) => {
        const socketUsers = [];
        for (let [id, socket] of io.of("/").sockets) {
          socketUsers.push({
            userID: id,
            username: socket.auth.username,
          });
        }

        const toUser = socketUsers.find(x => x.username == to);

        const user = (await User.find({token}))[0];
        
        if (user && toUser) {
          const usUser = socketUsers.find(x => x.username == user.username);

          io.to([usUser.userID, toUser.userID])
            .emit('message', user.username + "> " + msg, {
              from: user.username
            });
        }
      });

      socket.on('init', async (token) => {
        const user = await User.find({token});

        if (user[0]) {
          socket.auth = { username: user[0].username };
        }
      });
    });
  });
})();
