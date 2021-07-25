const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

router.post("/save", async (req, res) => {
  const { title, thumbnail, src } = req.body;
});
router.get("/search/:q", async (req, res) => {
  const { q } = req.params;
  console.log(q);
  res.send("Search videos");
});

module.exports = router;
