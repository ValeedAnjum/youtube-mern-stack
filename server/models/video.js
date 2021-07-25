const mongoose = require("mongoose");
const videoSchema = mongoose.Schema({
  title: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  src: {
    type: String,
  },
});

module.exports = Video = mongoose.model("YOUTUBE_VIDEO", videoSchema);
