import { sequelize } from './db.js'
import './models/index.js'

sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true }).then(() => {
	sequelize.sync({ force: true })
		.then(() => console.log('Migration complete'))
		.catch(error => console.error('Migration error', error.name, { error }))
})

