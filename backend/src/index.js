const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://dho619:1.618@cluster0-wvauf.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())

app.use(routes)

app.listen(3333)