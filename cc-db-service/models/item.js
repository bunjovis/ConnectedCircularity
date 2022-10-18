/* eslint-disable no-undef */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    'item',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID4,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
          as: 'user_id',
        },
      },
      item_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      adverd_id: {
        allowNull: true,
        unique: true,
        type: DataTypes.UUID,
      },
      transfer_time: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      collection_id: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    { freezeTablename: true, tableName: 'item' }
  );
  Item.associate = (models) => {
    Item.belongsTo(models.User, {
      foreignKey: 'id',
    });
    Item.hasOne(models.ItemDraft, {
      onDelete: 'CASCADE',
    });
  };
  return Item;
};
