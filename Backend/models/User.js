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
  co2Data: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Co2',
  }],
});
module.exports = mongoose.model("User", userSchema);
