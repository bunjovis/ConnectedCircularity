import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

export const FormContact = sequelize.define(
  'FormContact',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
    },
    configuration_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'form_configuration',
        key: 'id',
      },
    },
    name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    address: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, tableName: 'form_contact' }
);
