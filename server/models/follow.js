const { Schema, models, model } = require("mongoose");

const followSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  follower: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Follow = model("Follow", followSchema) || models.Follow;

module.exports.Follow = Follow;
