const express = require('express')
const router = require('./routes/routes')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(morgan('dev'))


app.use('/api', router)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Server error')
})

module.exports = app