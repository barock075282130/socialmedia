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
app.use('/signin', signin);
app.use("/register", register);
app.use('/userdata', getuser);

app.listen(PORT, ()=>{
    console.log(`app running on ${PORT}`)
})