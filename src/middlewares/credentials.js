import { allowedOrigins } from '../configs/allowedOrigins.js'

export const credentials = (req, res, next) => {
  const origin = req.headers.origin
  try {
    if (allowedOrigins.includes(origin)) {
      res.header('Access-Control-Allow-Credentials', true)
    }
    next()
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ message: error.message })
  }
}
