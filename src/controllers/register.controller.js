import User from '../models/user.model.js'
import { validationResult } from 'express-validator'

const createUser = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() })
  }
  let { email, password, name } = req.body
  try {
    const user = await User.findOne({ email })
    if (user) return res.status(400).json({ message: 'User already exists' })
    password = await User.hashPassword(password)
    const newUser = await User.create({
      name,
      email,
      password,
      refreshToken: '',
    })
    await newUser.save()
    res.status(202).send(newUser)
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ message: error.message })
  }
}

export default createUser
