import express, { Request, Response, NextFunction } from 'express'
import log from '../log'

var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId
var { User } = require('../models/user')

router.get('/', (req: Request, res: Response) => {
    res.json({ type: 'auth' })
})

module.exports = router
