import { Request, Response } from 'express'
import crypto from 'crypto'
import bcrypt from 'bcrypt'

import Admin from '../models/admin'
import bcryptConfig from '../config/bcrypt'

const adminController = {
    create: async (req: Request, res: Response) => {
        try {
            const { name, email, password: passwordBody } = req.body

            if (!name || !email || !passwordBody) return res.status(400).json({ message: 'Missing data' })

            const isAdminExists = await Admin.findOne({ email }).exec()

            if (isAdminExists) return res.status(401).json({ message: 'Admin Already Exists' })

            const password = await bcrypt.hash(passwordBody, bcryptConfig.salt)
            const access_token = crypto.randomBytes(30).toString('hex')

            const newAdmin = await new Admin({
                name,
                email,
                password,
                access_token,
            }).save()

            return res.status(201).json(newAdmin)
        } catch (err) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    },

    login: async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            if (!email || !password) return res.status(400).json({ message: 'Missing Data' })

            const admin = await Admin.findOne({ email }).exec()

            if (!admin) return res.status(401).json({ message: 'Email or Password is Wrong!' })

            const isPasswordValid = await bcrypt.compare(password, admin.password)

            if (!isPasswordValid) return res.status(401).json({ message: 'Email or Password is Wrong!' })

            return res.status(200).json({
                _id: admin._id,
                name: admin.name,
                email: admin.email,
                access_token: admin.access_token,
            })
        } catch (err) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    },

    select: async (req: Request, res: Response) => {
        try {
            const { id: _id } = req.params
            const noSelect = ['-password', '-email', '-access_token']

            if (_id) {
                const admin = await Admin.findOne({ _id }, noSelect).exec()
                return res.status(200).json(admin)
            } else {
                const admins = await Admin.find({}, noSelect).exec()
                return res.status(200).json(admins)
            }
        } catch (err) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    },
}

export default adminController
