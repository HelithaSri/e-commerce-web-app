require('dotenv').config();
const PORT = process.env.PORT || 4000;
const express = require("express");
const connectDB = require('./config/db');
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const productRoutes = require('./routes/productRoutes');
const multerMiddleware = require('./middlewares/multerMiddleware');


const app = express();
app.use(express.json());
app.use(cors());

connectDB(); 

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});


// Upload endpoint

app.use('/images', express.static('upload/images'))


// Routes
app.use('/api/product', productRoutes);

app.listen(PORT, (error) =>
  !error
    ? console.log("> Server is up and running on port : " + PORT)
    : console.log("Error : " + console.error())
);
