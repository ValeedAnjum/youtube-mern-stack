const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const config = require("config");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const User = require("../models/user");
const { sendEmailToUser } = require("./util/sendemail");
const Token = require("../models/token");

//@route    POST auth/signin
//@desc     sigin routes
//@access   Public

router.post(
  "/signin",
  [
    check("email", "Please enter a valid email address").isEmail(),
    check("password", "Please enter password")
      .not()
      .isEmpty()
      .isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User does not exists" }] });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: "Wrong Password" }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 60 * 60 * 24 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      res.status(500).send("Server Error");
    }
  }
);

//@route    POST auth/register
//@desc     registration route
//@access   Public

router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty().isLength({ min: 5 }),
    check("email", "Enter a valid email address").isEmail(),
    check("password", "Enter a Password with minimum 6 characters")
      .not()
      .isEmpty()
      .isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      user = new User({ name, email, password });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      ///will generate a token
      // sendEmailToUser(res, "I am a token");
      ///will generate a token
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      res.status(500).send("Server Error");
    }
  }
);

//@route    POST auth/user
//@desc     getting authenticated user profile
//@access   Private
router.get("/user", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      res.status(400).json({ error: [{ msg: "User deos not exists" }] });
    }
    res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

//@route    POST auth/checkemailregistration
//@desc     checking whether the user is registared or not with the enterd email
//@access   Public
router.post("/checkemailregistration", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.find({ email: email }).select("name");
    // if (user.length === 0) {
    //   return res
    //     .status(400)
    //     .json({ errors: [{ msg: "User does not exists" }] });
    // }
    res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

//@route    POST auth/sendpasswordresetlink
//@desc     sending the password reset link to user email address
//@access   Public
router.post("/sendpasswordresetlink", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.find({ email: email.toLowerCase() }).select("_id");
    if (user.length === 0)
      return res
        .status(400)
        .json({ errors: [{ msg: "user does not exists" }] });
    // res.json(user[0]._id);
    const token = new Token({
      _userId: user[0]._id,
      token: crypto.randomBytes(16).toString("hex"),
    });
    await token.save();
    sendEmailToUser(res, token.token, email);
  } catch (error) {
    console.log("Serever Error");
    res.status(500).send("Server Error");
  }
});

//@route    POST auth/passwordresettokenverification/:usertoken
//@desc     setting the new password by checking the token validation
//@access   Public
router.post("/passwordresettokenverification/:usertoken", async (req, res) => {
  const { usertoken } = req.params;
  const { password } = req.body;
  try {
    const token = await Token.find({ token: usertoken });
    // console.log("token", token);
    if (token.length === 0)
      return res.status(400).json({ errors: [{ msg: "Token is not valid" }] });
    // const user = await User.find({ _id: token[0]._userid }).limit(1);
    const user = await User.findById(token[0]._userId);
    // console.log("user", user);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    // generating a token
    // console.log(user[0].id);
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errors: [{ msg: "Server Error" }] });
  }
});
module.exports = router;
