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
      console.error(err);
      return res.status(400).json({ status: false, message: err.message });
    }
    console.error(err);
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

exports.deleteProduct = async (req, res) => {
  const { name, id } = req.body;

  try {
    let product = await Product.findOneAndDelete({ id: id });
    if (!product) {
      console.log("Product not found for name : " + name);
      return res.status(404).json({
        status: false,
        message: "Product not found",
      });
    }
    console.log("Product Deleted!");
    res.json({
      status: true,
      name: name,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      console.error(err);
      return res.status(400).json({ status: false, message: err.message });
    }
    console.error(err);
    res.status(500).json({ status: false, message: "Server error" });
  }
};

exports.getAllProduct = async (req, res) => {
  const { name, id } = req.body;

  try {
    let products = await Product.find({});

    res.status(201).json({
      status: true,
      products: products || [],
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      console.error(err);
      return res.status(400).json({ status: false, message: err.message });
    }
    console.error(err);
    res.status(500).json({ status: false, message: "Server error" });
  }
};
