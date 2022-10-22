import jwt from 'jsonwebtoken'
import { env } from '../config.js'
const { ACCESS_TOKEN } = env

const verifyToken = (req, res, next) => {
  try {
    const accessToken = req.headers.authorization || req.headers.Authorization
    if (!accessToken) return res.sendStatus(401)
    const token = accessToken.split(' ')[1]
    jwt.verify(token, ACCESS_TOKEN, (err, decoded) => {
      if (err) return res.sendStatus(403)
      req.userId = decoded.id
      next()
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

export default verifyToken
