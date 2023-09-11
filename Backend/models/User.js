const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  },
  resetPasswordExpires: {
    type: Date,
  },
  image: {
    type : String,
  },
  userType: {
    type: String,
    enum: ["Admin", "Customer"],
  },
});
module.exports = mongoose.model("User", userSchema);
