const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Video = require("../models/video");

router.post(
  "/save",
  [
    check("title", "Please enter a title").isEmail().isLength({ min: 20 }),
    check("thumbnail", "Please enter thumbnail source").not().isEmpty(),
    check("src", "Please enter a source url").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, thumbnail, src } = req.body;
    try {
      const video = new Video({
        title,
        thumbnail,
        src,
      });
      const videoRes = await video.save();
      return res.json(videoRes);
    } catch (error) {
      // console.log(error.message);
      return res.status(500).send("Server Error");
    }
  }
);

router.get("/search/:q", async (req, res) => {
  const { q } = req.params;
  console.log(q);
  res.send("Search videos");
});

module.exports = router;
