import { User } from '../../models/index.js'
import { hashPassword } from '../../controllers/user.js'
import users from './data.json'

const hashedUsers = await Promise.all(users.map(async user => ({
	...user,
	password: await hashPassword(user.password)
})))

const userSeed = () => User.bulkCreate(hashedUsers)

export default userSeed