// controllers/coffeeController.js
let coffees = require("../data/coffeeData");

// Controller functions for handling coffee data
const getAllCoffees = (req, res) => {
  res.json(coffees);
};

const getCoffeeById = (req, res) => {
  const { id } = req.params;
  const coffee = coffees.find((item) => item.id === parseInt(id));
  if (coffee) {
    res.json(coffee);
  } else {
    res.status(404).send("Coffee not found");
  }
};

const getCoffeeByType = (req, res) => {
  const { type } = req.params;
  const filteredCoffees = coffees.filter((item) =>
    item.description.toLowerCase().includes(type.toLowerCase())
  );
  if (filteredCoffees.length > 0) {
    res.json(filteredCoffees);
  } else {
    res.status(404).send("No coffee found for the given type");
  }
};

module.exports = {
  getAllCoffees,
  getCoffeeById,
  getCoffeeByType,
};
