const mongoose = require('mongoose')

let connectToDB = false

async function Connected(){
    mongoose.set('strictQuery', true);

    if(connectToDB){
        return;
    }

    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "socialmedia",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      connectToDB = true;
      console.log("database connected");
    } catch (error) {
      console.log("connect fail");
    }
}

module.exports.Connected = Connected;