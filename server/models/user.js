const { Schema, model, models } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    require: [true, "email is required!"],
  },
  password: {
    type: String,
    require: [true, "password is required!"],
  },
});

const User = model('User', userSchema) || models.User
module.exports.User = User;