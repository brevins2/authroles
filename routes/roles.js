const express = require('express')
const routes = express.Router()

routes.delete('/delete/:id', (req, res, next) => {
    res.json("Role deleted")
})

routes.post('/create', (req, res, next) => {
    res.json("Role created successfully")
})

module.exports = routes;
