const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000
require('dotenv').config()
app.use(cors());
app.use(express.json())

const register = require('./route/register');
const signin = require('./route/signin');
const getuser = require('./route/userdata');
const post = require('./route/post');
const acc = require('./route/acc');
const profile = require('./route/profile');
const authUser = require('./middleware/auth');

app.use('/signin', signin);
app.use('/post',post);
app.use("/register", register);
app.use('/userdata', getuser);
app.use('/acc', acc)
app.use('/profile', authUser , profile)

app.listen(PORT, ()=>{
    console.log(`app running on ${PORT}`)
})