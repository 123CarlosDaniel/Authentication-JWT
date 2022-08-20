import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller.js'

const router = Router()

router.post('/', AuthController)

export default router
