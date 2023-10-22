const { Schema, model, models } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    require: [ true, "username is required" ]
  },
  email: {
    type: String,
    require: [true, "email is required"],
  },
  password: {
    type: String,
    require: [true, "password is required"],
  },
  img: {
    bgimg: {
      type: String,
    },
    profileimg: {
      type: String,
    }
  }
});

const User = model('User', userSchema) || models.User
module.exports.User = User;