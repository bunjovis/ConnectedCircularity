/* eslint-disable no-undef */
'use strict';

module.exports = (sequelize, DataTypes) => {
  const Api_configuration = sequelize.define(
    'api_configuration',
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
      auth_endpoint: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { freezeTablename: true, tableName: 'api_configuration' }
  );
  Api_configuration.associate = (models) => {
    Api_configuration.hasMany(models.User, {
      foreignKey: 'api',
      onDelete: 'CASCADE',
    });
    Api_configuration.hasMany(models.ApiStatistic, {
      foreignKey: 'api',
      onDelete: 'CASCADE',
    });
  };
  return Api_configuration;
};
