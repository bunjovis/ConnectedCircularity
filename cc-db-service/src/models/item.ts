import { DataTypes } from 'sequelize';
import { sequelize } from '../db';
import { ItemDraft } from './itemDraft';
import { User } from './user';

export const Item = sequelize.define(
  'Item',
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
  { freezeTableName: true, tableName: 'item' }
);

Item.hasOne(ItemDraft, {
  foreignKey: 'item_id',
});

ItemDraft.belongsTo(Item, {
  foreignKey: 'id',
});
