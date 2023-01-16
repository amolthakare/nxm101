const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    gender : String,
    pass : String
}) 

const UserModel = mongoose.model("appuser",userSchema);

module.exports={
    UserModel,
}