// controllers/userController.js

const Carts = require('../services/carts.services');

async function createCarts(req, res) {
  try {
    const { phoneNumber, dateOfBirth, address } = req.body;
    console.log(req.body);
    const cart = await Carts.createCarts(req.body);
    res.json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getCarts(req, res) {
  try {
    const cart = await Carts.getCarts();
    res.json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getCartsById(req, res) {
  try {
    const cart = await Carts.getCartsById(req.params.id);
    res.json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateCarts(req, res) {
  try {
    const cart = await Carts.updateCarts(req.params.id, req.body);
    res.json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteCarts(req, res) {
  try {
    const cart = await Carts.deleteCarts(req.params.id);
    res.json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { createCarts, getCarts, getCartsById, updateCarts, deleteCarts };
