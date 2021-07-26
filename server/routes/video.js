const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Video = require("../models/video");
const videosData = require("../temp_data/videosData");

// router.post(
//   "/save",
//   [
//     check("title", "Please enter a title").isEmail(),
//     check("thumbnail", "Please enter thumbnail source").not().isEmpty(),
//     check("src", "Please enter a source url").not().isEmpty(),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     // const { title, thumbnail, src } = req.body;
//     try {
//     videosData.forEach(async (data) => {
//       const { title, thumbnail, src } = data;
//       const video = new Video({
//         title,
//         thumbnail,
//         src,
//       });
//       const result = await video.save();
//     });
//     return res.sned("Success");
//     } catch (error) {
//     console.log(error.message);
//     return res.status(500).send("Server Error");
//     }
//   }
// );

router.get("/randomvideos/:num", async (req, res) => {
  const { num } = req.params;
  try {
    const videos = await Video.aggregate([{ $sample: { size: Number(num) } }]);
    return res.json(videos);
  } catch (error) {
    return res.status(500).send("Server Error");
  }
});

router.get("/search/:q", async (req, res) => {
  const { q } = req.params;
  try {
    const regex = new RegExp(q, "i");
    const result = await Video.find({ title: regex });
    res.json(result);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
