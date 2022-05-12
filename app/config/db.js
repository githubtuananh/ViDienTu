const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.DB_LOCAL)
  .then(() => console.log("connected to DB!"))
  .catch((error) => console.log("connected fail !"));

module.exports = mongoose;
