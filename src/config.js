import { config } from 'dotenv'

config()

export const env = {
  MONGO_URI : process.env.MONGO_URI,
  ACCESS_TOKEN: process.env.ACCESS_SECRET_TOKEN,
  REFRESH_TOKEN: process.env.REFRESH_SECRET_TOKEN,
}
