const router = require('express').Router();
const authUser = require('../middleware/auth')

router.get('/', authUser ,async(req,res)=>{
    const { userId, username, email, bgimg, profileimg } = await req.user;
    return res.status(200).json({
      userId: userId,
      username: username,
      email: email,
      profileImg: profileimg,
      bgImg: bgimg,
    });
})

module.exports = router