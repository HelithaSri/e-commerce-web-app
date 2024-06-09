const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const upload = require('../middlewares/multerMiddleware');

// Create a new product (protected route)
router.post('/', productController.createProduct);

// Upload product image
router.post('/upload', upload.single("product"), productController.uploadProductImage);

module.exports = router;