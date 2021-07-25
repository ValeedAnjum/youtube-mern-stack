const express = require("express");
const app = express();
const cors = require("cors");

const connectDB = require("./config/db");

connectDB();

//initializing Middlewares
app.use(express.json({ extended: false }));
app.use(cors());

//Testing API
app.get("/", (req, res) => res.send("API IS UP"));

//Defining Routes
app.use("/auth", require("./routes/auth"));
app.use("/video", require("./routes/video"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
