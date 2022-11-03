import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

export const FormLocation = sequelize.define(
  'FormLocation',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
    },
    configurationId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'form_configuration',
        key: 'id',
      },
    },
    zipCode: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    address: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    municipality: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, tableName: 'form_location' }
);
