import express from 'express'
import cors from 'cors'
require('dotenv').config()

const database = require('../database/db')
const PORT = process.env.PORT as string | number

// middlewares
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// controller
// var routes = require('../routes/routes')
var questionRoutes = require('../controller/questionController')
// var authRoutes = require('../controller/authController')
// app.use('/', routes)
app.use('/api/questions', questionRoutes)
// app.use('/auth', authRoutes)

app.listen(PORT, () => {
    console.log('Server running at: ' + PORT)
})
