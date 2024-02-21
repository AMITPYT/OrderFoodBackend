// services/userService.js

const Dishes = require('../../../models/dishes')
const Restaurant = require('../../../models/restaurant');

async function createDishes(body) {
  try {
    const dishes = await Dishes.create(body);
    console.log(dishes); // Log userDetails if creation is successful
    return dishes;
  } catch (error) {
    console.error(error); // Log the actual error message
    throw new Error('Error creating dishes');
  }
}

async function getDishes() {
  try {
    const dishes = await Dishes.findAll();
    return dishes;
  } catch (error) {
    throw new Error('Error fetching dishes');
  }
}

async function getDishesById(id) {
  try {
    const dishes = await Dishes.findByPk(id, {
      include: Restaurant // Include the associated User model
    });
    if (!dishes) throw new Error('dishes not found');
    return dishes;
  } catch (error) {
    throw new Error('Error fetching  dishes');
  }
}

async function updateDishes(id, updates) {
  try {
    const dishes = await Dishes.findByPk(id);
    if (!dishes) throw new Error('dishes not found');
    await dishes.update(updates);
    return dishes;
  } catch (error) {
    throw new Error('Error updating dishes');
  }
}

async function deleteDishes(id) {
  try {
    const dishes = await Dishes.findByPk(id);
    if (!dishes) throw new Error('dishes not found');
    await dishes.destroy();
    return dishes;
  } catch (error) {
    throw new Error('Error deleting dishes');
  }
}

module.exports = { createDishes, getDishes, getDishesById, updateDishes, deleteDishes };
