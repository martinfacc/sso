import dotenv from 'dotenv'
dotenv.config()
import log4js from 'log4js'

log4js.configure({
	appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
	categories: { default: { appenders: ['cheese'], level: 'debug' } }
})

const logger = log4js.getLogger('logger')

export default logger