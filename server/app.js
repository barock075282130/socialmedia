const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')
const bodyParser = require('body-parser')
require('dotenv').config()
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true,
    limit: "10mb"
}));
app.use(bodyParser.json())

const register = require('./route/register');
const signin = require('./route/signin');
const getuser = require('./route/userdata');
const post = require('./route/post');
const acc = require('./route/acc');
const profile = require('./route/profile');
const authUser = require('./middleware/auth');
const follow = require('./route/follow');

app.use('/signin', signin);
app.use('/post',post);
app.use("/register", register);
app.use('/userdata', getuser);
app.use('/acc', acc)
app.use('/profile', authUser , profile)
app.use('/follow', follow)

module.exports = app;