import { User } from '../models/index.js'

const sessionExtractor = async (request, response, next) => {
	try {
		const userId = request?.session?.userId
		if (!userId) throw new Error('User not found')
		const user = await User.findByPk(userId)
		if (!user || user.state !== 'active')
			throw new Error('The user is not active')
		request.user = user
		next()
	} catch (error) {
		delete request.session.userId
		next(error)
	}
}

export default sessionExtractor
