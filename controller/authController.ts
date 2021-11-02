import express, { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import bcp from '../config/bcrypt'
import log from '../log'
import jwt from 'jsonwebtoken'

var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId
var { User } = require('../models/user')

router.post('/register', async (req: Request, res: Response) => {
    log.info(req.body)
    try {
        const newPassword = bcrypt.hash(req.body.password, bcp.salt)
        await User.create({
            email: req.body.name,
            password: newPassword,
        })
        res.json({ status: 'ok' })
    } catch (err) {
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

router.post('/login', async (req: Request, res: Response) => {
    const user = await User.findOne({
        email: req.body.email,
    })

    if (!user) {
        return { status: 'error', error: 'Invalid Login' }
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

    if (isPasswordValid) {
        const token = jwt.sign(
            {
                email: user.email,
            },
            bcp.secret
        )
        return res.json({ status: 'ok', user: token })
    } else {
        return res.json({ status: 'error', user: false })
    }
})

module.exports = router
