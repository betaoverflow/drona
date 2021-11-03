import express, { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import bcp from '../config/bcrypt'
import jwt from 'jsonwebtoken'

var router = express.Router()
var User = require('../models/user')

router.post('/register', async (req: Request, res: Response) => {
    try {
        const newPassword = await bcrypt.hash(req.body.password, bcp.salt)
        await User.create({
            email: req.body.email,
            password: newPassword,
        })
        res.json({ status: 'ok' })
    } catch (err) {
        res.json({ status: 'error', error: err })
    }
})

router.post('/login', async (req: Request, res: Response) => {
    const user = await User.findOne({
        email: req.body.email,
    })

    if (!user) {
        return { status: 'error', error: 'Invalid login' }
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

    if (isPasswordValid) {
        const token = jwt.sign(
            {
                name: user.name,
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
