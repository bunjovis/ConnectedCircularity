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
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    collectionId: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    expiryDate: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  },
  { freezeTableName: true, tableName: 'formConfiguration' }
);

FormConfiguration.hasOne(FormLocation, {
  foreignKey: 'configurationId',
  onDelete: 'CASCADE',
});

FormLocation.belongsTo(FormConfiguration, {
  foreignKey: 'id',
});

FormConfiguration.hasOne(FormContact, {
  onDelete: 'CASCADE',
  foreignKey: 'configurationId',
});

FormContact.belongsTo(FormConfiguration, {
  foreignKey: 'id',
});
