const express = require("express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");
//Needed to implemented the Apollo Server and apply it to the Express server as middleware
const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("./utils/auth");
const { typeDefs } = require("./schema");
const resolvers = require("./Schema/resolvers");

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

  // Socket.io
  const http = require('http').Server(app);
  const io = require('socket.io')(http);
  io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('User Disconnected');
    });
    socket.on('example_message', function(msg){
      console.log('message: ' + msg);
    });
  });
  io.listen(8000);
})();
