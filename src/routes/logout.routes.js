import { Router } from 'express'
import { handleLogout } from '../controllers/logout.controller.js'

const router = Router()

router.get('/', handleLogout)

export default router
