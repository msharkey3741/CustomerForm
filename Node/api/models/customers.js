const mongoose = require("mongoose");

const customer = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  firstName: String,
  lastName: String,
  email: String
});

module.exports = mongoose.model("Customers", customer);
