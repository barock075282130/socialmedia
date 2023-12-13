const router = require("express").Router();
const authUser = require("../middleware/auth");
const Connected = require("../utils/database").Connected;
const Follow = require("../models/follow").Follow;
const User = require("../models/user").User;

router.post("/", authUser, async (req, res) => {
  const { username } = await req.body;
  const auth = req.user;
  try {
    if (!auth) {
      return res.status(401).send("No permission");
    }
    await Connected();

    const user = await User.findOne({ username });
    const following_id = user._id;
    const follower_id = auth.userId;
    const follow = await Follow.findOne({ user: follower_id });
    if (!follow) {
      const newFollowing = new Follow({
        user: follower_id,
        following: following_id,
      });
      await newFollowing.save();
      return res.status(200).send("Follow success");
    }
    follow.following.push(following_id);
    await follow.save();
    return res.status(200).send("Follow success");
  } catch (error) {
    console.log(error);
  }
});

router.get("/follower/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Connected();
    const findFollow = await Follow.findOne({ user: id });
    const data = [];
    for (let i = 0; i < findFollow.following.length; i++) {
      const followUser = await User.findById(findFollow.following[i]);
      const items = {
        username: followUser.username,
        email: followUser.email,
        profileimg: followUser.profileimg,
      };
      data.push(items);
    }
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
