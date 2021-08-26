const mongoose = require("mongoose");
const videoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  searchTitle: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
  channelName: {
    type: String,
    required: true,
  },
  videoDuration: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = Video = mongoose.model("YOUTUBE_VIDEO", videoSchema);
