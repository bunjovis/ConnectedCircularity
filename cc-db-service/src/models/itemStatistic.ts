import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

export const ItemStatistic = sequelize.define(
  'ItemStatistic',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
    },
    item_id: {
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
    material_description: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    material_amount: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    amount_unit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    amount_info: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    location_name: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    municipality: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    contact_role: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    contact_phone: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { freezeTableName: true, tableName: 'item_statistic' }
);
