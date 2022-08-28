import logger from '../logger.js'

const loggerMiddleware = (request, response, next) => {
	logger.info('---')
	logger.info('📝  Request received')
	logger.info('📝  Method: ' + request.method)
	logger.info('📝  Path: ' + request.path)
	logger.info('📝  Body: ' + JSON.stringify(request.body))
	logger.info('📝  Params: ' + JSON.stringify(request.params))
	next()
}

export default loggerMiddleware