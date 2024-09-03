const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cretedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
