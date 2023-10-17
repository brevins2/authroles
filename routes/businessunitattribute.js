const express = require('express')
const routebu = express.Router()

routebu.delete('/businessesunit/:id', (req, res, next) => {
    res.json("Business unit deleted deleted")
})

routebu.post('/create', (req, res, next) => {
    res.json("Business Unit created successfully")
})

routebu.put('/businessunit/:id', (req, res, next) => {
    res.json("Business Unit updated successfully")
})

module.exports = routebu;
