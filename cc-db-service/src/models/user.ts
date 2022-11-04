import { DataTypes /*Model*/ } from 'sequelize';
import { sequelize } from '../db';
import { Item } from '../models/item';
import { FormConfiguration } from './formConfiguration';

/*
Not used yet
export interface UserModel extends Model<UserModel> {
  id: string;
  name: string;
  api: string;
  created_at: string;
}
*/

export const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    api: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    tableName: 'user',
  }
);

User.hasMany(Item, {
  foreignKey: 'userId',
});

User.hasMany(FormConfiguration, {
  foreignKey: 'userId',
});

FormConfiguration.belongsTo(User, { foreignKey: 'id' });

Item.belongsTo(User, {
  foreignKey: 'id',
});

User.hasMany(FormConfiguration, {
  foreignKey: 'userId',
});

FormConfiguration.belongsTo(User, {
  foreignKey: 'id',
});
