const express = require('express')
const app = express();

const customerRoute = require('./api/routes/customers')

app.use('/customers', customerRoute)


// app.use((req, res, next)=>{
//     res.status(200).json({
//         message: 'Fired'
//     })
// })

module.exports = app;