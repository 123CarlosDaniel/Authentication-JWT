import { allowedOrigins } from './allowedOrigins.js'

const corsOptions = {
  origin: (origin, callback) => {
    console.log(origin)
    if (allowedOrigins.indexOf(origin) !==-1 || !origin ) {
      callback(null, true)
    } else {
      callback(new Error('Origin not allowed'))
    }
  },
  optionsSuccessStatus: 200,
  
}

export default corsOptions
