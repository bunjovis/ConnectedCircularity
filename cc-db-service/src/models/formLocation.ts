import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

export const FormLocation = sequelize.define(
  'FormLocation',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    configuration_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'form_configuration',
        key: 'id',
      },
    },
    zip_code: {
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
