const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  const {
    name,
    image,
    category,
    new_price,
    old_price,
    description,
    short_description,
  } = req.body;

  try {
    const newProduct = new Product({
      name,
      image,
      category,
      new_price,
      old_price,
      description,
      short_description,
    });

    const product = await newProduct.save();
    res.status(201).json({
      status: true,
      product,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ status: false, message: err.message });
    }
    res.status(500).json({ status: false, message: "Server error" });
  }
};

exports.uploadProductImage = async (req, res) => {
  try {
    console.log("Image Successfully Uploaded!");
    res.json({
      success: true,
      image_url: `http://localhost:${process.env.PORT}/images/${req.file.filename}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Server error" });
  }
};
