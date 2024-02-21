// controllers/userController.js

const RestaurantServices = require('../services/restaurant.services');

async function createRestaurant(req, res) {
  try {
    const { phoneNumber, dateOfBirth, address } = req.body;
    console.log(req.body);
    const restaurant = await RestaurantServices.createRestaurant(req.body);
    res.json(restaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getRestaurant(req, res) {
  try {
    const restaurant = await RestaurantServices.getRestaurants();
    res.json(restaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getRestaurantById(req, res) {
  try {
    const restaurant = await RestaurantServices.getRestaurantById(req.params.id);
    res.json(restaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateRestaurant(req, res) {
  try {
    const restaurant = await RestaurantServices.updateRestaurants(req.params.id, req.body);
    res.json(restaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteRestaurant(req, res) {
  try {
    const restaurant = await RestaurantServices.deleteRestaurant(req.params.id);
    res.json(restaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { createRestaurant, getRestaurant, getRestaurantById, updateRestaurant, deleteRestaurant };
