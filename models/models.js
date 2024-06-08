const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
      type:String,
      required:[true, "Enter your name"]
    },
    email :{
      type:String,
      required:[true, "Enter your email"]
    },
    password : {
      type:String,
      required:[true, "Enter your password"]
    },
   
   },  {timestamps:true}
)

const user = mongoose.model("users", userSchema)


module.exports = user

   