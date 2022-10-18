/* eslint-disable no-undef */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemDraft = DataTypes.define(
    'item_draft',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID4,
      },
      item_id: {
        allowNull: false,
        type: DataTypes.UUID,
        unique: true,
        onDelete: 'CASCADE',
        references: {
          model: 'item',
          key: 'id',
          as: 'item_id',
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
      material_description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      material_amount: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      material_unit: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      material_info: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location_address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location_zip_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location_municipality: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      expiry_date: {
        type: DataTypes.Date,
        allowNull: true,
      },
      contact_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      contact_phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      contact_email: {
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
    { freezeTablename: true, tableName: 'item_draft' }
  );
  ItemDraft.associate = (models) => {
    ItemDraft.belongsTo(models.Item, {
      foreignKey: 'id',
    });
  };
  return Item;
};
