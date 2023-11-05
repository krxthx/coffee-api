const express = require("express");
const router = express.Router();
const {
  getAllCoffees,
  getCoffeeById,
  getCoffeeByType,
} = require("../controllers/coffeeController");

router.get("/", (req, res) => {
  res.send("Welcome to the Coffee API");
});

router.get("/coffees", getAllCoffees);
router.get("/coffees/:id", getCoffeeById);
router.get("/coffees/type/:type", getCoffeeByType);

module.exports = router;
