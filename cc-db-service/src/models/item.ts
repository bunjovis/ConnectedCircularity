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
    itemId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    adverdId: {
      allowNull: true,
      unique: true,
      type: DataTypes.UUID,
    },
    transferTime: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    collectionId: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, tableName: 'item' }
);

Item.hasOne(ItemDraft, {
  foreignKey: 'itemId',
});

ItemDraft.belongsTo(Item, {
  foreignKey: 'id',
});

Item.hasMany(ItemStatistic, {
  foreignKey: 'itemId',
});

ItemStatistic.belongsTo(Item, {
  foreignKey: 'id',
});

Item.hasOne(FormConfiguration, {
  sourceKey: 'collectionId',
  foreignKey: 'collectionId',
});

FormConfiguration.hasMany(Item, {
  sourceKey: 'collectionId',
  foreignKey: 'collectionId',
});
