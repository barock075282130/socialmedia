const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Connected } = require("../utils/database");
const User = require("../models/user").User;

router.post("/", async (req, res) => {
  const { username, email, password } = await req.body;

  try {
    await Connected();

    const user = await User.find();
    if (user.username === username) {
      return res.status(409).json("username is used");
    }
    if (user.email === email) {
      return res.status(409).json("email already exist");
    }
    const hashPass = await bcrypt.hash(password, 10);
    const createUser = new User({
      username,
      email,
      password: hashPass,
    });
    await createUser.save();
    return res.status(200).json("register success");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
