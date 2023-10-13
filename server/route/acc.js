const router = require("express").Router();
const User = require("../models/user").User;
const { Connected } = require("../utils/database");

router.get("/", async (req, res) => {
  return res.status(200).json("connect success");
});

router.get("/:id", async (req, res) => {
  const { id } = await req.body;
  try {
    await Connected();

    const getdata = await User.find().limit(3);

    if (!getdata) {
      return res.status(404).json("Cant find user");
    }
    return res.status(200).json(getdata);
  } catch (error) {
    return res.status(500).json("fetch failed");
  }
});

module.exports = router;
