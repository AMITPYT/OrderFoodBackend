// services/userService.js

const Dishes = require('../../../models/dishes')
const Carts = require('../../../models/cart');
const User = require('../../../models/user');
const userDetails = require('../../../models/userDetails');
const Restaurant = require('../../../models/restaurant');

async function createCarts(body) {
  try {
    const carts = await Carts.create(body);
    console.log(carts); // Log userDetails if creation is successful
    return carts;
  } catch (error) {
    console.error(error); // Log the actual error message
    throw new Error('Error creating carts');
  }
}

async function getCarts() {
  try {
    const carts = await Carts.findAll();
    return carts;
  } catch (error) {
    throw new Error('Error fetching carts');
  }
}

async function getCartsById(id) {
    try {
      const carts = await Carts.findByPk(id, {
        include: [
          { model: User },
          { model: userDetails },
          { model: Dishes, include: [{ model: Restaurant }] }
        ]
      });
      
      if (!carts) {
        throw new Error('Carts not found');
      }
      
      return carts;
    } catch (error) {
      console.error('Error fetching carts:', error);
      throw new Error('Error fetching carts. Please check server logs for details.');
    }
  }
  

async function updateCarts(id, updates) {
  try {
    const carts = await Carts.findByPk(id);
    if (!carts) throw new Error('carts not found');
    await carts.update(updates);
    return carts;
  } catch (error) {
    throw new Error('Error updating carts');
  }
}

async function deleteCarts(id) {
  try {
    const carts = await Carts.findByPk(id);
    if (!carts) throw new Error('carts not found');
    await carts.destroy();
    return carts;
  } catch (error) {
    throw new Error('Error deleting carts');
  }
}

module.exports = { createCarts, getCarts, getCartsById, updateCarts, deleteCarts };
