const express = require('express')
const app = express()
const { authRole, authBusinessUnit } = require('./permissions')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Home page content')
})

app.get('/dashboard', authBusinessUnit('level_1', 'Admin'), (req, res, next) => {
    res.send('Can delete, create and add business unit type attribute')
})

app.get('/admin', authRole(['Admin']), (req, res, next) => {
    res.json('can delete and create role')
    app.use('/role', require('./routes/roles'))
    app.use('./routes/businessunitattribute')
})

app.listen('4000', (err, res) => {
    if (err) console.log(err)
    console.log('listening to port 4000');
})