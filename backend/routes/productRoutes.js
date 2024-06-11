const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const upload = require("../middlewares/multerMiddleware");

// Create a new product
router.post("/", productController.createProduct);

// Upload product image
router.post(
  "/upload",
  upload.single("product"),
  productController.uploadProductImage
);

//  Delete product
router.post("/delete", productController.deleteProduct);

//  Get all products
router.get("/", productController.getAllProduct);

module.exports = router;