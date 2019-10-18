const mongoose = require("mongoose");

const customer = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  firstName: { type: String, required: "First Name Required" },
  lastName: { type: String, required: "Last Name Required" },
  email: {
    type: String,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Not Valid Email"],
    required: "Email is required"
  }
});

module.exports = mongoose.model("Customers", customer);
