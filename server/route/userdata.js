const router = require('express').Router();
const User = require('../models/user').User;
const { Connected } = require('../utils/database');
const authUser = require('../middleware/auth')

router.get('/', authUser ,async(req,res)=>{
    const { userId, email } = await req.user
    return res.status(200).json({ userId: userId, email: email });
})

module.exports = router