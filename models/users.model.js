const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNumber: { type: Number },
  Address: String,
  email: { type: String, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
