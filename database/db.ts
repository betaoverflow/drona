import mongoose from 'mongoose'
require('dotenv').config()
import log from '../log'

const dbUri = process.env.DB_CONNECTION as string
mongoose.connect(dbUri, err => {
    if (!err) log.info('Database connected and running')
    else log.error('Database error: ' + JSON.stringify(err, undefined, 2))
})
