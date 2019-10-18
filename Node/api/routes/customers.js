const express = require("express");
const router = express.Router();
// const service = require("../services/customerService");
const Customer = require("../models/customers");
const mongoose = require("mongoose");
/* get customer */
router.get("/", (req, res, next) => {
  Customer.find()
    .exec()
    .then(docs => {
      res.status(200).json(docs);
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
        createdCustomer: result
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
/* update customer */
// router.put("/:id", (req, res, next) => {
//   const id = req.params.id;
//   const update = {};
//   /* Update just info passed */
//   for (const info of req.body) {
//     update[info.propName] = info.value;
//   }
//   Customer.update(
//     { _id: id },
//     {
//       $set: update
//     }
//   )
//     .exec()
//     .then(result => {
//       res.status(200).json(result);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });
module.exports = router;
