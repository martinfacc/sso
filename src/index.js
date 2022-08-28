import dotenv from 'dotenv'
dotenv.config()

import { sequelize } from './db.js'
import express from 'express'
import cors from 'cors'
import session from 'express-session'
import { sessionStore } from './session.js'
import loggerMiddleware from './middlewares/logger.js'
import notFound from './middlewares/notFound.js'
import errorHandler from './middlewares/errorHandler.js'
import userRouter from './routes/user.js'
import bodyParser from 'body-parser'
import logger from './logger.js'

const { APP_PORT } = process.env
const app = express()

app.use(
	cors({
		origin: '*',

		methods: ['GET', 'POST'],

		allowedHeaders: ['Content-Type'],
	})
)
app.use(fileupload())
app.use(loggerMiddleware)
app.use(
	session({
		key: 'session_cookie_name',
		secret: 'session_cookie_secret',
		store: sessionStore,
		resave: false,
		saveUninitialized: false,
	})
)

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(express.json())

app.use('/api/user', userRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(APP_PORT, () => {
	logger.info(`App listening on port ${APP_PORT}!`)
	sequelize
		.sync({ force: false })
		.then(() => logger.info('Connection has been established successfully.'))
		.catch((err) => logger.error('Unable to connect to the database:', err))
})
