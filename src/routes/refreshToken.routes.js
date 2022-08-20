import { Router } from 'express'
import { handleRefreshToken } from '../controllers/refresh.controller.js'

const router = Router()

router.get('/', handleRefreshToken)

export default router
