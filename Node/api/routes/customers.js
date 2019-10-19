const express = require("express");
const router = express.Router();
const Customer = require("../models/customers");
const mongoose = require("mongoose");

/* get customer */
router.get("/", (req, res, next) => {
  Customer.find()
    //.select("firstName lastName email _id")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        customers: docs.map(doc => {
          return {
            firstName: doc.firstName,
            lastName: doc.lastName,
            email: doc.email,
            id: doc._id,
            request: {
              type: "GET",
              url: `http://localhost:3000/customers/${doc._id}`
            }
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      res.state(500).json({
        error: err
      });
    });
});
/* get customer */
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Customer.findById(id)
    .select("firstName lastName email _id")
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({
          message: "ID doesnt exist"
        });
      }
    })
    .catch(err =>
      res.status(500).json({
        err: err
      })
    );
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
    .then(result => {
      res.status(201).json({
        createdCustomer: {
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          request: {
            type: "GET",
            url: `http://localhost:3000/customers/${result._id}`
          }
        }
      });
    })
    .catch(err =>
      res.status(500).json({
        error: err
      })
    );
});
/* delete customer */
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Customer.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
