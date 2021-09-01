const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "YouTube_USER",
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
    expires: 3600,
  },
});

module.exports = Token = mongoose.model("YouTube_Token", tokenSchema);
