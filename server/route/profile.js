const router = require("express").Router();
const User = require("../models/user").User;
const { Post } = require("../models/post");
const { Connected } = require("../utils/database");
const jwt = require("jsonwebtoken");
const fs = require('node:fs')
const multer = require("multer");
const path = require("node:path");
const os = require("os")
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

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

router.patch("/upload_profile/:id",upload.single("profile"),async (req, res) => {
    const { id } = req.params;
    const file = req.file;
    const auth = req.user;
    try {
      if (auth.userId !== id) {
        return res.status(401).json("Auth Needed");
      }
      await Connected();
      const saveProfile = await User.findById(id);
      if (!saveProfile) {
        return res.status(404).json("User not found");
      }
      const tempfilepath = path.join(os.tmpdir(), file.originalname)
      fs.writeFileSync(tempfilepath, file.buffer)
      const uploading = fs.readFileSync(tempfilepath);
      const uploadimg = await new Promise((resolve) => {
        cloudinary.uploader
          .upload_stream({ folder: 'profiles' }, (error, uploadResult) => {
            if (error) {
              return res.status(400).send("Bad Request");
            }
            return resolve(uploadResult);
          })
          .end(uploading);
      })
      const post = await Post.find({ userpostid: id });
      for (let i = 0; i < post.length; i++) {
        post[i].profile = uploadimg.secure_url;
        await post[i].save();
      }
      saveProfile.profileimg = uploadimg.secure_url;
      await saveProfile.save();
      const token = jwt.sign(
        {
          userId: saveProfile._id,
          username: saveProfile.username,
          email: saveProfile.email,
          bgimg: saveProfile.bgimg,
          profileimg: uploadimg.secure_url,
        },
        process.env.JWT,
        { expiresIn: "365d" }
      );
      res.status(200).json({ token: token });
    } catch (error) {
      throw error;
    }
  }
);

router.patch("/upload_background/:id",upload.single("background"),async (req, res) => {
    const { id } = req.params;
    const file = req.file;
    const auth = req.user;
    try {
      if (auth.userId !== id) {
        return res.status(401).json("Auth Needed");
      }
      await Connected();
      const saveProfile = await User.findById(id);
      if (!saveProfile) {
        return res.status(404).json("User not found");
      }
      const tempfilepath = path.join(os.tmpdir(), file.originalname)
      fs.writeFileSync(tempfilepath, file.buffer)
      const uploading = fs.readFileSync(tempfilepath)
      const uploadimg = await new Promise((resolve) => {
        cloudinary.uploader
          .upload_stream({ folder: "backgrounds" }, (err, uploadResult) => {
            if (err) {
              return res.status(400).send("Upload Error");
            }
            return resolve(uploadResult);
          })
          .end(uploading);
      });
      saveProfile.bgimg = uploadimg.secure_url;
      await saveProfile.save();
      const token = jwt.sign(
        {
          userId: saveProfile._id,
          username: saveProfile.username,
          email: saveProfile.email,
          bgimg: uploadimg.secure_url,
          profileimg: saveProfile.profileimg,
        },
        process.env.JWT,
        { expiresIn: "365d" }
      );
      res.status(200).json({ token: token });
    } catch (error) {
      throw error;
    }
  }
);

module.exports = router;
