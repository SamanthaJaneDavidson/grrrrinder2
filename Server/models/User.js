const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Order = require('./Order'); //added for Stripe

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    //don't need hased will have it's own length 
    // minlength: 8,
  },
  token: {
    type: String,
  },
  orders: [Order.schema], //added this for Stripe

  dog: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Dog',
    },
  ],

  saved_dogs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Dog',
    }
  ]
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;

