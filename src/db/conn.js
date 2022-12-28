const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/my-Registration").then(() =>{
    console.log("Connection Successfull");
}).catch((e) => {
    console.log("Not Connected");
})