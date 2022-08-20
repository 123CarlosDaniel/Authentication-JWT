import userModel from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import { env } from '../config.js'

const { ACCESS_TOKEN, REFRESH_TOKEN } = env

export const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies
  try {
    if (!cookies?.jwt) return res.status(401).json({ message: 'No refresh token provided' })
    const refreshToken = cookies.jwt

    const foundUser = await userModel.findOne({ refreshToken })
    if (!foundUser) return res.status(403).json({ message: 'No user with this token' })
    jwt.verify(refreshToken, REFRESH_TOKEN, (err, decoded) => {
      if (err || foundUser.id !== decoded.id) return res.status(403).json({ message: 'No user with this token' })
      const accessToken = jwt.sign({ id: foundUser.id }, ACCESS_TOKEN, { expiresIn: '10s' })
      res.json({ accessToken })
    })
  } catch (error) {
    res.status(500).json({ message: err.message })
  }
}
