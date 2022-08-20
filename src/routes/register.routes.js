import { Router } from 'express'
import { body } from 'express-validator'
import createUser from '../controllers/register.controller.js'

const router = Router()

router.post(
  '/',
  body('email').isEmail().withMessage('El email es invalido'),
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener minimo 6 caracteres '),
  createUser
)

export default router
