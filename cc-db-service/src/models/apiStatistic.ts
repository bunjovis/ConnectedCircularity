import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

export const ApiStatistic = sequelize.define(
  'ApiStatistic',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
    },
    api: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    success: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    statisticType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timeStamp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { freezeTableName: true, tableName: 'api_statistic' }
);
