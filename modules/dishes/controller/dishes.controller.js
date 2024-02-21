// controllers/userController.js

const Dishes = require('../services/dishes.services');

async function createDishes(req, res) {
  try {
    const { phoneNumber, dateOfBirth, address } = req.body;
    console.log(req.body);
    const dishes = await Dishes.createDishes(req.body);
    res.json(dishes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getDishes(req, res) {
  try {
    const dishes = await Dishes.getDishes();
    res.json(dishes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getDishesById(req, res) {
  try {
    const dishes = await Dishes.getDishesById(req.params.id);
    res.json(dishes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateDishes(req, res) {
  try {
    const dishes = await Dishes.updateDishes(req.params.id, req.body);
    res.json(dishes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteDishes(req, res) {
  try {
    const dishes = await userDetailsServices.deleteUserDetails(req.params.id);
    res.json(dishes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { createDishes, getDishes, getDishesById, updateDishes, deleteDishes };
