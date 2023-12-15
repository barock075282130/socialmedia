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

    const follower_id = auth.userId;

    const user = await User.findOne({ username });
    const crrUser = await User.findById(follower_id);

    user.follower.push(crrUser._id);
    crrUser.following.push(user._id);

    await user.save();
    await crrUser.save();

    return res.status(200).send("Follow success");
  } catch (error) {
    console.log(error);
  }
});

router.delete("/unfollow", authUser, async (req, res) => {
  const { username } = await req.body;
  const auth = req.user;
  try {
    if (!auth) {
      return res.status(401).send("No Permission");
    }
    await Connected();

    const user = await User.findOne({ username });

    const currUserId = auth.userId;
    const followUserId = user._id;
    const following = await User.updateOne(
      { _id: currUserId },
      { $pull: { following: followUserId } }
    );
    const follower = await User.updateOne(
      { _id: followUserId },
      { $pull: { follower: currUserId } }
    );
    if (!following || !follower) {
      return res.status(300).send("Unfollow failed");
    }
    return res.status(200).send("Unfollow success");
  } catch (error) {
    return res.status(500).send("Error");
  }
});

router.get("/follower/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Connected();
    const findFollow = await User.findById(id);
    if (!findFollow) {
      return res.status(404).json("No Follower");
    }
    const follower = findFollow.follower;
    const following = findFollow.following;

    const allData = {};

    for (const id of [...follower, ...following]) {
      const data = await User.findById(id);
      if (following.includes(id)) {
        allData.following = allData.following || [];
        const setData = {
          username: data.username,
          email: data.email,
          profileimg: data.profileimg,
        };
        allData.following.push(setData);
      } else {
        allData.followers = allData.followers || [];
        const setData = {
          username: data.username,
          email: data.email,
          profileimg: data.profileimg,
        };
        allData.followers.push(setData);
      }
    }

    return res.status(200).json(allData);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
