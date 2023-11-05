// src/app.js
const express = require("express");
const app = express();
const coffeeRoutes = require("./routes/coffeeRoutes");

app.use(express.json());

app.use("/", coffeeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
