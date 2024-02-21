// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const cartsController = require('../controller/carts.controller');

// Create user
router.post('/addcart', cartsController.createCarts);

// Get all users
router.get('/cart', cartsController.getCarts);

// Get user by ID
router.get('/cart/:id', cartsController.getCartsById);

// Update user
router.put('/cart/:id', cartsController.updateCarts);

// Delete user
router.delete('/cart/:id', cartsController.deleteCarts);

module.exports = router;
