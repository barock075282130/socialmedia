const router = require('express').Router();
const Post = require('../models/post').Post
const { User } = require('../models/user');
const { Connected } = require('../utils/database')

router.post('/' ,async(req,res)=>{
    const { userId, post, img } = await req.body;
    try {
        await Connected()

        const user = await User.findById(userId)
        const name = user.username;
        const email = user.email;
        const address = email.split('@')[1]

        const createPost = new Post({
          userpostid: userId,
          address: "@" + address,
          username: name,
          posttext: post,
          postimg: img || "",
        });
        await createPost.save();
        return res.status(200).json("Post created");
    } catch (error) {
        return res.status(500).json("Fetch error")
    }
})

router.get('/getpost',async(req,res)=>{
    try {
        await Connected();
        const data = await Post.find()
        if(!data){
            return res.status(404).json('post not found')
        }
        const post = [];
        data.map((items) => {
            const postdata = {
                userpostid: items.userpostid,
                postid: items._id,
                username: items.username,
                address: items.address,
                posttext: items.posttext,
                img: items.postimg || "",
            };
            post.push(postdata)
        });
        return res.status(200).json(post)
    } catch (error) {
        return res.status(500).json('fetch failed')
    }
})

router.get('/:id',async(req,res)=>{
    const { id } = req.params;
    try {
        const getUserPost = await Post.find({ userpostid: id })
        if(!getUserPost){
            return res.status(404).json('No Post Yet')
        }
        return res.status(200).json(getUserPost)
    } catch (error) {
        return res.status(500).json('fetch failed')
    }
})

module.exports = router