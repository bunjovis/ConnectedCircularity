import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

import { FormContact } from './formContact';
import { FormLocation } from './formLocation';

export const FormConfiguration = sequelize.define(
  'FormConfiguration',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    collection_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, tableName: 'form_configuration' }
);

FormConfiguration.hasOne(FormLocation, {
  onDelete: 'CASCADE',
});

FormConfiguration.hasOne(FormContact, {
  onDelete: 'CASCADE',
});
