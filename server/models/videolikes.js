const mongoose = require("mongoose");

const videolikeSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "YouTube_USER",
  },
  videoId: {
    type: String,
    required: true,
  },
});

module.exports = Like = mongoose.model("YTVideo_Like", videolikeSchema);
