// routes/userRoutes.js

const express = require('express');
const { restaurantController } = require('../controller');
const router = express.Router();


// Create user
router.post('/addrestaurant', restaurantController.createRestaurant);

// Get all users
router.get('/restaurants', restaurantController.getRestaurant);

// Get user by ID
router.get('/restaurants/:id', restaurantController.getRestaurantById);

// Update user
router.put('/restaurants/:id', restaurantController.updateRestaurant);

// Delete user
router.delete('/restaurants/:id', restaurantController.deleteRestaurant);

module.exports = router;
