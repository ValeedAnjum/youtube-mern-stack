const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const Video = require("../models/video");
const Like = require("../models/videolikes");
const Unlike = require("../models/videounlikes");
// const videosData = require("../temp_data/videosData");

//@route    POST video/save
//@desc     route for saving bulk of videos data into database will not be included in production
//@access   Public
// router.post(
//   "/save",
//   [
//     check("title", "Please enter a title").not().isEmpty(),
//     check("thumbnail", "Please enter thumbnail source").not().isEmpty(),
//     check("src", "Please enter a source url").not().isEmpty(),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     const { title, thumbnail, src } = req.body;
//     // generating integer from min to max
//     function generateRandomInteger(min, max) {
//       return Math.floor(Math.random() * (max - min)) + min;
//     }
//     // channels
//     const channels = [
//       "machinery and technology",
//       "machinery",
//       "technology",
//       "future",
//     ];

//     videosData.forEach(async (data) => {
//       const { title, thumbnail, src, searchTitle, videoDuration } = data;
//       const video = new Video({
//         title,
//         thumbnail,
//         src,
//         searchTitle,
//         views: generateRandomInteger(1000, 5000),
//         channelName: channels[Math.floor(Math.random() * channels.length)],
//         videoDuration,
//       });
//       try {
//         await video.save();
//       } catch (error) {
//         return res.status(500).send("Server error");
//       }
//     });
//     return res.send("Success");
//   }
// );

//@route    GET video/randomvideos/:num
//@desc     getting random video specified by numbber
//@access   Public
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

//@route    GET video/playvideo/:id
//@desc     getting only video src by id
//@access   Public
router.get("/playvideo/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const videos = await Video.findById(id).select("src");
    return res.json(videos);
  } catch (error) {
    return res.status(500).send("Server Error");
  }
});

//@route    GET video/videotitle/:id
//@desc     getting only video title by id
//@access   Public
router.get("/videotitle/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const title = await Video.findById(id).select("title");
    return res.json(title);
  } catch (error) {
    return res.status(500).send("Server Error");
  }
});

//@route    GET video/videoviewsanddata/:id
//@desc     getting view and creation data by id
//@access   Public
router.get("/videoviewsanddata/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const title = await Video.findById(id).select(["views", "createdAt"]);
    return res.json(title);
  } catch (error) {
    return res.status(500).send("Server Error");
  }
});

//@route    POST video/like/:id
//@desc     save or delete a like document with userId and videoId
//@access   Private
router.post("/like/:id", auth, async (req, res) => {
  const { id } = req.params;
  try {
    // checking user video like status
    const liked = await Like.find({
      $and: [{ videoId: id }, { userId: req.user.id }],
    });
    if (liked.length > 0) {
      const like = await Like.findByIdAndRemove(liked[0]._id);
      like.save();
      return res.json({ ...like._doc, like: false });
    }
    const like = new Like({ userId: req.user.id, videoId: id });
    like.save();
    // console.log(like);
    return res.json({ ...like._doc, like: true });
  } catch (error) {
    return res.status(500).send(error);
  }
});

//@route    POST video/unlike/:id
//@desc     save or delete a unlike document with userId and videoId
//@access   Private
router.post("/unlike/:id", auth, async (req, res) => {
  const { id } = req.params;
  try {
    // checking user video like status
    const unliked = await Unlike.find({
      $and: [{ videoId: id }, { userId: req.user.id }],
    });
    //if yes then generating an error
    console.log(unliked);
    if (unliked.length > 0) {
      const unlike = await Unlike.findByIdAndRemove(unliked[0]._id);
      unlike.save();
      return res.json({ ...unlike._doc, unlike: false });
    }
    const unlike = new Unlike({ userId: req.user.id, videoId: id });
    unlike.save();

    return res.json({ ...unlike._doc, unlike: true });
  } catch (error) {
    return res.status(500).send(error);
  }
});

//@route    GET video/getnumberoflikes/:id
//@desc     getting number of unlike of a video by video id
//@access   Public
router.get("/getnumberoflikes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const likesInNum = await Like.find({ videoId: id }).countDocuments();
    return res.json(likesInNum);
  } catch (error) {
    return res.status(500).send(error);
  }
});

//@route    GET video/getnumberofunlikes/:id
//@desc     getting number of like of a video by video id
//@access   Public
router.get("/getnumberofunlikes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const UnLikesInNum = await Unlike.find({ videoId: id }).countDocuments();
    return res.json(UnLikesInNum);
  } catch (error) {
    return res.status(500).send(error);
  }
});

//@route    POST video/likedbyuser/:id
//@desc     checking that the authenticated user liked the video or not
//@access   Private

router.get("/likedbyuser/:id", auth, async (req, res) => {
  const { id } = req.params;
  try {
    // checking user video like status
    const liked = await Like.find({
      $and: [{ videoId: id }, { userId: req.user.id }],
    });

    return res.json(liked);
  } catch (error) {
    return res.status(500).send(error);
  }
});

//@route    POST video/likedbyuser/:id
//@desc     checking that the authenticated user unliked the video or not
//@access   Private

router.get("/unlikedbyuser/:id", auth, async (req, res) => {
  const { id } = req.params;
  try {
    // checking user video like status
    const unliked = await Unlike.find({
      $and: [{ videoId: id }, { userId: req.user.id }],
    });

    return res.json(unliked);
  } catch (error) {
    return res.status(500).send(error);
  }
});

//@route    POST video/search/:q
//@desc     getting a search result
//@access   Public
router.get("/search/:q", async (req, res) => {
  const { q } = req.params;
  try {
    const regex = new RegExp(q, "i");
    const result = await Video.find({ title: regex })
      .limit(10)
      .select("searchTitle");
    res.json(result);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
