import express from 'express'
import morgan from 'morgan'
import indexRoutes from './routes/index.routes.js'
import authRoutes from './routes/auth.routes.js'
import registerRoutes from './routes/register.routes.js'
import logoutRoutes from './routes/logout.routes.js'
import refreshRoutes from './routes/refreshToken.routes.js'
import protectedRoutes from './routes/protected.routes.js'
import corsOptions from './configs/corsOptions.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { credentials } from './middlewares/credentials.js'
import verifyToken from './middlewares/verifyToken.js'

const app = express()

//Settings
app.set('PORT', process.env.PORT || 3500)
app.use(morgan('dev'))
app.use(credentials)
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
//middlewares
app.use(express.json())
app.use(cookieParser())

app.use('/api', indexRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/register', registerRoutes)
app.use('/api/refresh', refreshRoutes)
app.use('/api/logout', logoutRoutes)
app.use(verifyToken)
app.use('/api/protected', protectedRoutes)
export default app
