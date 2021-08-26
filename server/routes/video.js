const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Video = require("../models/video");
const videosData = require("../temp_data/videosData");

router.post(
  "/save",
  [
    check("title", "Please enter a title").not().isEmpty(),
    check("thumbnail", "Please enter thumbnail source").not().isEmpty(),
    check("src", "Please enter a source url").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, thumbnail, src } = req.body;
    // generating integer from min to max
    function generateRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    // channels
    const channels = ["hum Tv", "ary news", "red chilli", "coding phase"];

    videosData.forEach(async (data) => {
      const { title, thumbnail, src, searchTitle } = data;
      const video = new Video({
        title,
        thumbnail,
        src,
        searchTitle,
        views: generateRandomInteger(1000, 5000),
        channelName: channels[Math.floor(Math.random() * channels.length)],
        videoDuration: `${Math.floor(Math.random() * 55) + 8}:${Math.floor(
          Math.random() * 60
        )}`,
      });
      try {
        await video.save();
      } catch (error) {
        return res.status(500).send("Server error");
      }
    });
    return res.send("Success");
  }
);

router.get("/randomvideos/:num", async (req, res) => {
  const { num } = req.params;
  try {
    const videos = await Video.aggregate([{ $sample: { size: Number(num) } }]);
    videos.forEach((vid) => {
      delete vid.src;
      delete vid.searchTitle;
    });
    return res.json(videos);
  } catch (error) {
    return res.status(500).send("Server Error");
  }
});

router.get("/playvideo/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const videos = await Video.findById(id);
    return res.json(videos);
  } catch (error) {
    return res.status(500).send("Server Error");
  }
});

router.get("/search/:q", async (req, res) => {
  const { q } = req.params;
  try {
    const regex = new RegExp(q, "i");
    const result = await Video.find({ title: regex }).select("searchTitle");
    res.json(result);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
