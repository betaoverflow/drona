const express = require('express')
const cors = require('cors')
require('dotenv').config()

const database = require('../database/db')
const PORT = process.env.PORT

// middlewares
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// controller
var routes = require('../routes/routes')
var questionRoutes = require('../controller/questionController')
var authRoutes = require('../controller/authController')
var opportunityRoutes = require('../controller/companyController')
app.use('/', routes)
app.use('/api/questions', questionRoutes)
app.use('/auth', authRoutes)
app.use('/api/opportunity', opportunityRoutes)

app.listen(PORT || 8080, () => {
    console.log('Server running at: ' + PORT)
})
