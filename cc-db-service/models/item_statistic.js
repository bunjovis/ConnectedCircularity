/* eslint-disable no-undef */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemStatistic = DataTypes.define(
    'item_statistic',
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
        onDelete: 'CASCADE',
        references: {
          model: 'item',
          key: 'id',
          as: 'item_id',
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
    { freezeTablename: true, tableName: 'item_statistic' }
  );
  ItemStatistic.associate = (models) => {
    ItemStatistic.belongsTo(models.Item, {
      foreignKey: 'id',
    });
  };
  return ItemStatistic;
};
