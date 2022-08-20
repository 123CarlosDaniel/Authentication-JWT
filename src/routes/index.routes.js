import { Router } from 'express'
import userModel from '../models/user.model.js'
const router = Router()

router.get('/', async (req, res) => {
  const users = await userModel.find({})
  res.status(200).json(users)
})

export default router
