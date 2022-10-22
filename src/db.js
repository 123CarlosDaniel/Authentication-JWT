import mongoose from 'mongoose'
import { env } from './config.js'

mongoose
  .connect(env.MONGO_URI)
  .then(db => console.log('DB is connected to', db.connection.name))
  .catch(err => console.log(err))
