const express = require("express");
const router = express.Router();
// const service = require("../services/customerService");
const Customer = require("../models/customers");
const mongoose = require("mongoose");
/* get customer */
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "get customers"
  });
});
/* get customer */
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Customer.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
    })
    .catch(err => console.log(err));
});
/* add customer */
router.post("/", (req, res, next) => {
  const customer = new Customer({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  });
  customer
    .save()
    .then(result => console.log(result))
    .catch(err => console.log(err));
  res.status(201).json({
    message: "add customers",
    createdCustomer: customer
  });
});
/* delete customer */
router.delete("/:id", (req, res, next) => {
  res.status(200).json({
    message: "delete customer"
  });
});
/* update customer */
router.put("/:id", (req, res, next) => {
  res.status(200).json({
    message: "update customer"
  });
});
module.exports = router;
