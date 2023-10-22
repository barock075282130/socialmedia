const router = require("express").Router();
const User = require("../models/user").User;
const ToBase64 = require("../middleware/base64file");
const { Post } = require("../models/post");
const { Connected } = require("../utils/database");
const jwt = require('jsonwebtoken')

router.get("/", async (req, res) => {
  const { username } = await req.user;
  return res.status(200).json(username);
});

router.patch("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const auth = await req.user;
  const { username } = await req.body;
  try {
    await Connected()

    if (id !== auth.userId) {
      return res.status(401).json("No Permission");
    }
    const allUser = await User.find();
    if (allUser) {
      for (let i = 0; i < allUser.length; i++) {
        const getUsername = allUser[i].username;
        if (username === getUsername) {
          return res.statusCode(400).json("username in use");
        }
      }
    }
    const findUser = await User.findById(id);
    const post = await Post.find({ userpostid: id });
    if (!findUser || !post) {
      return res.status(404).json("data not exist");
    }
    const token = jwt.sign(
      {
        userId: findUser._id,
        username: username,
        email: findUser.email,
      },
      process.env.JWT,
      { expiresIn: "365d" }
    );
    for(let i = 0; i < post.length; i++){
      post[i].username = username;
      await post[i].save();
    }
    findUser.username = username;
    await findUser.save();
    return res.status(200).json({ token: token, msg: "Update username success", username: username });
  } catch (error) {
    return res.status(500).json('something went wrong')
  }
});

module.exports = router;
