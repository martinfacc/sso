import { sequelize } from '../db.js'
import '../models/index.js'
import userSeed from './user'

const seed = async () => {
	try {
		await sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true })
		await sequelize.sync({ force: true })
		console.log('Migration complete')
		await userSeed()
		console.log('Seed complete')
	} catch (error) {
		console.error(error)
	}
}

seed()
