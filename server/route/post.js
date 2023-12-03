const router = require("express").Router();
const Post = require("../models/post").Post;
const { User } = require("../models/user");
const { Connected } = require("../utils/database");
const authUser = require("../middleware/auth");
const DateTime = require("../middleware/date");
const fs = require("node:fs");
const os = require("os");
const path = require("node:path");
const upload = require("../middleware/uploadfile");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

router.post("/", authUser, upload.array("image", 5), async (req, res) => {
  const post = await req.body.postText;
  const image = req.files;
  const auth = req.user;
  try {
    if (!auth) {
      return res.status(401).send("no authenticate");
    }
    await Connected();

    const user = await User.findById(auth.userId);
    const profile = user.profileimg;
    const name = user.username;
    const email = user.email;
    const address = email.split("@")[1];
    const time = new DateTime().createTime();
    const day = new DateTime().createDay();
    let allimg = [];
    if (image.length > 0) {
      for (let i = 0; i < image.length; i++) {
        const tempfilepath = path.join(os.tmpdir(), image[i].originalname);
        fs.writeFileSync(tempfilepath, image[i].buffer);
        const uploading = fs.readFileSync(tempfilepath);
        const uploadimg = await new Promise((resolve) => {
          cloudinary.uploader
            .upload_stream({ folder: "social" }, (error, uploadResult) => {
              if (error) {
                return res.status(400).send("Bad Request");
              }
              return resolve(uploadResult);
            })
            .end(uploading);
        });
        allimg.push({ link: uploadimg.secure_url, alt: uploadimg.public_id });
      }
      const createPost = new Post({
        userpostid: auth.userId,
        address: "@" + address,
        username: name,
        posttext: post,
        postimg: allimg,
        day: day,
        time: time,
        profile: profile || "",
      });
      await createPost.save();
      return res.status(200).json(createPost);
    }

    const createPost = new Post({
      userpostid: auth.userId,
      address: "@" + address,
      username: name,
      posttext: post,
      day: day,
      time: time,
      profile: profile || "",
    });
    await createPost.save();
    return res.status(200).json(createPost);
  } catch (error) {
    return res.status(500).json("Fetch error");
  }
});

router.get("/getpost", async (req, res) => {
  try {
    await Connected();
    const data = await Post.find();
    if (!data) {
      return res.status(404).json("post not found");
    }
    const post = [];
    data.map((items) => {
      const postdata = {
        userpostid: items.userpostid,
        postid: items._id,
        username: items.username,
        address: items.address,
        posttext: items.posttext,
        postimg: items.postimg || "",
        day: items.day,
        time: items.time,
        profile: items.profile,
      };
      post.push(postdata);
    });
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json("fetch failed");
  }
});

router.get("/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const getUserPost = await Post.find({ username: username });

    if (!getUserPost) {
      return res.status(404).json("No Post Yet");
    }
    return res.status(200).json(getUserPost);
  } catch (error) {
    return res.status(500).json("fetch failed");
  }
});

router.delete("/del", authUser, async (req, res) => {
  const { postId } = await req.body;
  const { userId } = await req.user;
  if (!userId) {
    return res.status(401).send("need permission");
  }
  try {
    const findImg = await Post.findById(postId);
    const del = await Post.findByIdAndRemove(postId);

    if (!del) {
      return res.status(400).json("Delete fail");
    }
    if (findImg.postimg.length > 0) {
      for(let i = 0; i < findImg.postimg.length; i++){
        cloudinary.api
          .delete_resources([findImg.postimg[i].alt])
      }
      return res.status(200).send("Delete successfully");
    }

    return res.status(200).json("Delete successfully");
  } catch (error) {
    return res.status(500).json("fetch failed");
  }
});

router.patch("/editpost/:username", authUser, async (req, res) => {
  const { text, postId, user } = await req.body;
  const { username } = req.params;
  const { userId } = await req.user;
  try {
    await Connected();
    if (user !== userId) {
      return res.status(400);
    }
    const getPost = await Post.find({ username: username }).where({
      _id: postId,
    });
    if (!getPost) {
      return res.status(404).json("Not Found 404");
    }
    getPost[0].posttext = text;
    await getPost[0].save();
    return res.status(200).json({ text: getPost[0].posttext });
  } catch (error) {
    throw error;
  }
});

module.exports = router;
