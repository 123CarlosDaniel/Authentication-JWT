import jwt from 'jsonwebtoken'
import { env } from '../config.js'
import User from '../models/user.model.js'

const accessSecretToken = env.ACCESS_TOKEN
const refreshSecretToken = env.REFRESH_TOKEN

export const AuthController = async (req, res) => {
  const { email, password } = req.body
  try {
    if (!email || !password) return res.status(400).json({ message: 'Email and password are required' })
    const user = await User.findOne({ email })
    let verifyPassword = false
    if (user) {
      verifyPassword = await User.verifyPassword(password, user.password)
    }
    if (!user || !verifyPassword) return res.status(400).json({ message: 'Invalid credentials' })

    const accessToken = jwt.sign({ id: user.id }, accessSecretToken, { expiresIn: '10s' })
    const refreshToken = jwt.sign({ id: user.id }, refreshSecretToken, { expiresIn: '1h' })

    res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'Lax', secure: false, maxAge: 1000 * 60 * 60 * 24 * 7 })
    await User.findByIdAndUpdate(user.id, { refreshToken }, { new: true })

    res.status(202).json({ accessToken })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
