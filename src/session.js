import dotenv from 'dotenv'
dotenv.config()

import session from 'express-session'
import getMySQLStore from 'express-mysql-session'

const { DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env

const mySQLStorage = getMySQLStore(session)
const sessionStore = new mySQLStorage({
	host: DB_HOST,
	port: DB_PORT,
	user: DB_USERNAME,
	password: DB_PASSWORD,
	database: DB_DATABASE,
})

export { sessionStore }
