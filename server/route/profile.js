const router = require("express").Router();
const User = require("../models/user").User;
const { Post } = require("../models/post");
const { Connected } = require("../utils/database");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const cloudinary = require('cloudinary').v2
cloudinary.config({
  secure: true,
  cloud_name: "djtwy82dy",
  api_key: "921867468333651",
  api_secret: "Pn1SkPpoRT9zT-pVhHXUOtzunIQ",
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    const name = Math.floor(Math.random() * 999999) + ".png";
    cb(null, file.fieldname + "-" + name);
  },
});
const upload = multer({ storage: storage });
const imgUpload = upload.fields([{ name: "profile", maxCount: 1 }, { name: "background", maxCount: 1 }])

router.get("/", async (req, res) => {
  const { username } = await req.user;
  return res.status(200).json(username);
});

router.patch("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const auth = await req.user;
  const { username } = await req.body;
  try {
    await Connected();

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
    if (!findUser) {
      return res.status(404).json("data not exist");
    }
    const token = jwt.sign(
      {
        userId: findUser._id,
        username: username,
        email: findUser.email,
        bgimg: findUser.bgimg,
        profileimg: findUser.profileimg,
      },
      process.env.JWT,
      { expiresIn: "365d" }
    );
    if (post.length > 0) {
      for (let i = 0; i < post.length; i++) {
        post[i].username = username;
        await post[i].save();
      }
    }
    findUser.username = username;
    await findUser.save();
    return res.status(200).json({
      token: token,
      msg: "Update username success",
      username: username,
    });
  } catch (error) {
    return res.status(500).json("something went wrong");
  }
});

router.patch("/upload_profile/:id", upload.single("profile"), async (req, res) => {
  const { id } = req.params;
  const file = req.file
  const auth = req.user
  try {
    if(auth.userId !== id){
      return res.status(401).json("Auth Needed")
    }
    await Connected();
    const saveProfile = await User.findById(id);
    if(!saveProfile){
      return res.status(404).json('User not found')
    }
    const uploadimg = await cloudinary.uploader.upload(file.path);
    const post = await Post.find({ userpostid: id })
    for(let i = 0; i < post.length; i++){
      post[i].profile = uploadimg.url;
      await post[i].save()
    }
    saveProfile.profileimg = uploadimg.url;
    await saveProfile.save();
    const token = jwt.sign(
      {
        userId: saveProfile._id,
        username: saveProfile.username,
        email: saveProfile.email,
        bgimg: saveProfile.bgimg,
        profileimg: saveProfile.profileimg,
      },
      process.env.JWT,
      { expiresIn: "365d" }
    );
    res.status(200).json({ token: token });
  } catch (error) {
    throw error;
  }
});

module.exports = router;
