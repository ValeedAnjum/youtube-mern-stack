const express = require("express");
const app = express();
const cors = require("cors");

const connectDB = require("./config/db");

connectDB();
