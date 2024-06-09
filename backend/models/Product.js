const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const productSchema = mongoose.Schema({
  id: {
    type: String,
    default: uuidv4, 
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
    required: true,
  },
  short_description: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Product", productSchema);
