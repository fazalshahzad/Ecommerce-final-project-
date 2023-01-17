const Product = require('../models/cartManagementModel');

// Add an item to the cart
exports.addToCart = (req, res) => {
    const productId = req.params.id;
    const quantity = req.body.quantity;
  
    Product.findById(productId, (err, product) => {
        if (err) {
            res.status(500).json({
                error: err
            });
        } else {
            // Add item to cart
            // You can store the cart in session or database
            // Here, we'll just store the item in an array
            let cart = req.session.cart || [];
            let found = false;
            cart.forEach((item) => {
                if (item._id === product._id) {
                    item.quantity += quantity;
                    found = true;
                }
            });
  
            if (!found) {
                cart.push({
                    _id: product._id,
                    productName: product.productName,
                    quantity: quantity,
                    price: product.price
                });
            }
  
            req.session.cart = cart;
            res.json({
                message: 'Successfully added to cart'
            });
        }
    });
};

//Remove item from cart
exports.removeFromCart = (req, res) => {
    const productId = req.params.id;
    let cart = req.session.cart;
  
    cart.forEach((item, index) => {
        if (item._id === productId) {
            cart.splice(index, 1);
        }
    });
  
    req.session.cart = cart;
    res.json({
        message: 'Successfully removed from cart'
    });
};
