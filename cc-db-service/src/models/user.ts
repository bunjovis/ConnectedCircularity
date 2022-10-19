import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';
import { Item } from '../models/item';
import { FormConfiguration } from './formConfiguration';

export interface UserModel extends Model<UserModel> {
  id: string;
  name: string;
  api: string;
  created_at: string;
}

export const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUID,
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
  foreignKey: 'user_id',
});

Item.belongsTo(User, {
  foreignKey: 'id',
});

User.hasMany(FormConfiguration, {
  foreignKey: 'user_id',
});

FormConfiguration.belongsTo(User, {
  foreignKey: 'id',
});
