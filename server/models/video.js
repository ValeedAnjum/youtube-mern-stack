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
});

module.exports = Video = mongoose.model("YOUTUBE_VIDEO", videoSchema);
