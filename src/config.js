import { config } from 'dotenv'

config()

export const env = {
  USER: process.env.USER_DATABASE,
  PASSWORD: process.env.PASSWORD_DATABASE,
  HOST: process.env.HOST_DATABASE,
  ACCESS_TOKEN: process.env.ACCESS_SECRET_TOKEN,
  REFRESH_TOKEN: process.env.REFRESH_SECRET_TOKEN,
}
