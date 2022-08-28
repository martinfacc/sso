import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../db.js'

class User extends Model {}
User.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'User',
	}
)

export default User
