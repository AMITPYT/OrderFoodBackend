// services/userService.js

const Restaurant = require('../../../models/restaurant')
const User = require('../../../models/user');

async function createRestaurant(body) {
  try {
    const restaurant = await Restaurant.create(body);
    console.log(restaurant); // Log userDetails if creation is successful
    return restaurant;
  } catch (error) {
    console.error(error); // Log the actual error message
    throw new Error('Error creating restaurant');
  }
}

async function getRestaurants() {
  try {
    const restaurant = await Restaurant.findAll();
    return restaurant;
  } catch (error) {
    throw new Error('Error fetching restaurant');
  }
}

async function getRestaurantById(id) {
  try {
    const restaurant = await Restaurant.findByPk(id, 
    //     {
    //   include: User // Include the associated User model
    // }
    );
    if (!restaurant) throw new Error('restaurant not found');
    return restaurant;
  } catch (error) {
    throw new Error('Error fetching  restaurant');
  }
}

async function updateRestaurants(id, updates) {
  try {
    const restaurant = await Restaurant.findByPk(id);
    if (!restaurant) throw new Error('restaurant not found');
    await restaurant.update(updates);
    return restaurant;
  } catch (error) {
    throw new Error('Error updating restaurant');
  }
}

async function deleteRestaurant(id) {
  try {
    const restaurant = await Restaurant.findByPk(id);
    if (!restaurant) throw new Error('restaurant not found');
    await restaurant.destroy();
    return restaurant;
  } catch (error) {
    throw new Error('Error deleting restaurant');
  }
}

module.exports = { createRestaurant, getRestaurants, getRestaurantById, updateRestaurants, deleteRestaurant };
