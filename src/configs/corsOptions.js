import { allowedOrigins } from './allowedOrigins.js'
const node_env = process.env.NODE_ENV

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !==-1 || node_env === 'dev' ?  !origin : false ) {
      callback(null, true)
    } else {
      callback(new Error('Origin not allowed'))
    }
  },
  optionsSuccessStatus: 200,
  
}

export default corsOptions
