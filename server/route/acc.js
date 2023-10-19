const router = require("express").Router();
const User = require("../models/user").User;
const { Connected } = require("../utils/database");

router.get("/", async (req, res) => {
  try {
    await Connected();

    const getdata = await User.find();
    if (!getdata) {
      return res.status(404).json("Cant find user");
    }
    return res.status(200).json(getdata);
  } catch (error) {
    return res.status(500).json("fetch failed");
  }
});

router.get("/:username", async (req, res) => {
  const { username } = req.params;
  try {
    await Connected();

    const getdata = await User.find({ username: { $ne: username } });
    if (!getdata) {
      return res.status(404).json("Cant find user");
    }
    return res.status(200).json(getdata);
  } catch (error) {
    return res.status(500).json("fetch failed");
  }
});

module.exports = router;
