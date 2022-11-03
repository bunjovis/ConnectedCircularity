import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

export const ItemStatistic = sequelize.define(
  'ItemStatistic',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    itemId: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 'item',
        key: 'id',
      },
    },
    title: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    material: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    industry: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    materialDescription: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    materialAmount: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    amountUnit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    amountInfo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    locationName: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    municipality: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    contactRole: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    contactPhone: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { freezeTableName: true, tableName: 'item_statistic' }
);
