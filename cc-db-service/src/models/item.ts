import { DataTypes } from 'sequelize';
import { sequelize } from '../db';
import { FormConfiguration } from './formConfiguration';
import { ItemDraft } from './itemDraft';
import { ItemStatistic } from './itemStatistic';

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

Item.hasMany(ItemStatistic, {
  foreignKey: 'item_id',
});

ItemStatistic.belongsTo(Item, {
  foreignKey: 'id',
});

Item.hasOne(FormConfiguration, {
  sourceKey: 'collection_id',
  foreignKey: 'collection_id',
});

FormConfiguration.hasMany(Item, {
  sourceKey: 'collection_id',
  foreignKey: 'collection_id',
});
