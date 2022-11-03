import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

export const ItemDraft = sequelize.define(
  'ItemDraft',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
    },
    itemId: {
      allowNull: false,
      type: DataTypes.UUID,
      unique: true,
      references: {
        model: 'item',
        key: 'id',
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    material: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    industry: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    materialDescription: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    materialAmount: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    materialUnit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    materialInfo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    locationName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    locationAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    locationZipCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    locationMunicipality: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    expiryDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    contactName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactPhone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactEmail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  { freezeTableName: true, tableName: 'item_draft' }
);
