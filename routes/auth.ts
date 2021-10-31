import { Router } from 'express'

import adminController from '../controller/authController'

const router = Router()

router.get('/admin', adminController.select)
router.get('/admin/:id', adminController.select)
router.post('/admins', adminController.create)
router.post('/admin/login', adminController.login)

export default router
