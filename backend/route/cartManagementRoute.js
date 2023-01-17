const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController');

// Add item to cart
router.post('/add-to-cart/:id', cartController.addToCart);

// Remove item from cart
router.post('/remove-from-cart/:id', cartController.removeFromCart);

module.exports = router;
