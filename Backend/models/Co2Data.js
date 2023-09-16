const mongoose = require("mongoose");

const c02Schema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  emittedOn: {
    type: Date,
    required: true,
  },
  emittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
});
module.exports = mongoose.model("Co2", c02Schema);
