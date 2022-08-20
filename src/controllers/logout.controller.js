import userModel from '../models/user.model.js'

export const handleLogout = async (req, res) => {
  const cookies = req.cookies
  if (!cookies?.jwt) return res.status(200).json({ message: 'No token provided' })
  try {
    const refreshToken = cookies.jwt
    await userModel.findOneAndUpdate({ refreshToken }, { refreshToken: '' }, { new: true })
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'Lax', secure: false })
    return res.sendStatus(202)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
