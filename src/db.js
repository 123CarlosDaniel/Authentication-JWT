import mongoose from 'mongoose'
import { env } from './config.js'

mongoose
  .connect(`mongodb+srv://${env.USER}:${env.PASSWORD}@${env.HOST}`)
  .then(db => console.log('DB is connected to', db.connection.name))
  .catch(err => console.log(err))
