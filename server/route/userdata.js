const router = require('express').Router();
const authUser = require('../middleware/auth')

router.get('/', authUser ,async(req,res)=>{
    const { userId, username, email } = await req.user;
    return res.status(200).json({ userId: userId, username: username, email: email });
})

module.exports = router