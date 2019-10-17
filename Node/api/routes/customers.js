const express = require('express')
const router = express.Router();
/* get customer */
router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'get customers'
    })
})
/* get customer */
router.get('/:id', (req, res, next)=>{
    const id = req.params.id
    if(id === '1'){
    res.status(200).json({
        message: 'get customer by id',
        id:id
    })
    } else{
        res.status(200).json({
            message: 'other id'
        })
    }
})
/* add customer */
router.post('/', (req, res, next)=>{
    const customer = {
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        email: req.body.email
    }
    res.status(201).json({
        message: 'add customers',
        createdCustomer: customer
    })
})
/* delete customer */
router.delete('/:id', (req, res, next)=>{
    res.status(200).json({
        message: 'delete customer'
    })
})
/* update customer */
router.put('/:id', (req, res, next)=>{
    res.status(200).json({
        message: 'update customer'
    })
})
module.exports = router;