const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Connected } = require('../utils/database')
const User = require('../models/user').User

router.post("/", async(req, res) => {
    const { email, password } = await req.body;
    try {
        await Connected();

        const user = await User.findOne({ email })
        if(!user){
            const hashPass = await bcrypt.hash(password, 10);
            const createUser = new User({
                email,
                password: hashPass,
            });
            await createUser.save();
            return res.status(200).json("register success");
        }
        return res.status(409).json("email already exist");
    } catch (error) {
        return res.status(500).json("error");
    }
});

module.exports = router;
