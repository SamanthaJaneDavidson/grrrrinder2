const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.db_username}:${process.env.db_password}@grrrrinder2.argev.mongodb.net/`,
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/grrrrinder2', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

module.exports = mongoose.connection;
