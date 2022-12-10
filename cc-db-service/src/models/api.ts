import { DataTypes } from 'sequelize';
import { sequelize } from '../db';
import { User } from './user';
import { ApiStatistic } from './apiStatistic';

export const Api = sequelize.define(
  'Api',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    authEndpoint: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    authRefresh: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { freezeTableName: true, tableName: 'apiConfiguration' }
);

Api.hasMany(User, {
  foreignKey: 'api',
  onDelete: 'CASCADE',
});

User.belongsTo(Api, {
  foreignKey: 'id',
});

Api.hasMany(ApiStatistic, {
  foreignKey: 'api',
  onDelete: 'CASCADE',
});

ApiStatistic.belongsTo(Api, {
  foreignKey: 'id',
});
