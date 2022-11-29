import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

export const ApiStatistic = sequelize.define(
  'ApiStatistic',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
  },
  { freezeTableName: true, tableName: 'apiStatistic' }
);
