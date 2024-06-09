require('dotenv').config();
const PORT = process.env.PORT || 4000;
const express = require("express");
const app = express();
const connectDB = require('./config/db');
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection
// mongoose.connect(
//   "mongodb+srv://helithaSri:kQehR9tBnQZq8lyB@cluster0.r5tosxg.mongodb.net/"
// );
connectDB();
app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()} ${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Upload endpoint

app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success:1,
    image_url:`http://localhost:${port}/images/${req.file.filename}`
  });
});

app.listen(PORT, (error) =>
  !error
    ? console.log("> Server is up and running on port : " + PORT)
    : console.log("Error : " + console.error())
);
