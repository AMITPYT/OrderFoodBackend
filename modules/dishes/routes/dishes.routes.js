// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const dishesController = require('../controller/dishes.controller');

// Create user
router.post('/adddishes', dishesController.createDishes);

// Get all users
router.get('/dishes', dishesController.getDishes);

// Get user by ID
router.get('/dishes/:id', dishesController.getDishesById);

// Update user
router.put('/dishes/:id', dishesController.updateDishes);

// Delete user
router.delete('/dishes/:id', dishesController.deleteDishes);

module.exports = router;
