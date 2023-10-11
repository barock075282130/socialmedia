const router = require('express').Router();
const { Connected } = require('../utils/database');
const User = require('../models/user').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

router.post('/',async(req,res)=>{
    const { email, password } = await req.body;
    try {
        await Connected();

        const findUser = await User.findOne({ email })
        if(!findUser){
            return res.status(404).json('user not found');
        }
        const passwordHash = findUser.password
        const comparePass = await bcrypt.compare(password, passwordHash);
        if(!comparePass){
            return res.status(409).json('wrong password');
        }
        const token = jwt.sign({ userId: findUser._id, email },process.env.JWT,{ expiresIn: '365d' })
        return res.status(200).json({ token: token })
    } catch (error) {
        return res.status(500).json('fetch error')
    }
})

module.exports = router;