const express = require('express')
const router = express.Router();
/* get customer */
router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'get customers'
    })
})
router.get('/:id', (req, res, next)=>{
    const id = req.params.id
    if(id === '1'){
    res.status(200).json({
        message: 'get customer by id'
    })
    } else{
        res.status(200).json({
            message: 'other id'
        })
    }
})
/* add customer */
router.post('/', (req, res, next)=>{
    res.status(200).json({
        message: 'add customers'
    })
})
router.delete('/', (req, res, next)=>{
    res.status(200).json({
        message: 'delete customers'
    })
})
router.put('/', (req, res, next)=>{
    res.status(200).json({
        message: 'update customers'
    })
})
module.exports = router;