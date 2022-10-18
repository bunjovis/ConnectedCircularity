/* eslint-disable no-undef */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      api: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'api_configuration',
          key: 'id',
          as: 'api',
        },
      },
    },
    { freezeTablename: true, tableName: 'user' }
  );
  User.associate = (models) => {
    User.belongsTo(models.Api_configuration, {
      foreignKey: 'id',
    });
    User.hasMany(models.Item, {
      foreignKey: 'user_id',
    });
  };
  return User;
};
