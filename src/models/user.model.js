import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'

const { Schema, model } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  refreshToken: {
    type: String | null,
  },
})

userSchema.statics.hashPassword = async password => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

userSchema.statics.verifyPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash)
}

export default model('User', userSchema)
