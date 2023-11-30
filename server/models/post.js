const { Schema, model, models } = require("mongoose");

const postSchema = new Schema({
  userpostid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  username: {
    type: String,
  },
  address: {
    type: String,
  },
  posttext: {
    type: String,
  },
  postimg: [{ type: String }],
  day: {
    type: String,
  },
  time: {
    type: String,
  },
  profile: {
    type: String,
  },
});

const Post = model("Post", postSchema) || models.Post;
module.exports.Post = Post;
