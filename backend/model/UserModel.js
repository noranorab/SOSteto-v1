const mongoose = require("mongoose")

const UserModel = new mongoose.Schema({
    lname: String,
    fname: String,
    email: { type: String, unique: true },
    password: String,

}, {
    collection: "UserInfo"
});
mongoose.model("UserInfo", UserModel);