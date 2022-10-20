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
      references: {
        model: 'item',
        key: 'collection_id',
      },
    },
    expiry_date: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  },
  { freezeTableName: true, tableName: 'form_configuration' }
);

FormConfiguration.hasOne(FormLocation, {
  foreignKey: 'configuration_id',
  onDelete: 'CASCADE',
});

FormLocation.belongsTo(FormConfiguration, {
  foreignKey: 'configuration_id',
});

FormConfiguration.hasOne(FormContact, {
  onDelete: 'CASCADE',
  foreignKey: 'configuration_id',
});

FormContact.belongsTo(FormLocation, {
  foreignKey: 'configuration_id',
});
