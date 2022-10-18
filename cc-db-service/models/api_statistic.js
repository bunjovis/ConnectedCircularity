/* eslint-disable no-undef */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const ApiStatistic = DataTypes.define(
    'api_statistic',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID4,
      },
      api: {
        allowNull: false,
        type: DataTypes.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'api_configuration',
          key: 'id',
          as: 'api',
        },
      },
      success: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      statistic_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timeStamp: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    { freezeTablename: true, tableName: 'api_statistic' }
  );
  ApiStatistic.associate = (models) => {
    ApiStatistic.belongsTo(models.ApiConfiguration, {
      foreignKey: 'id',
    });
  };
  return ApiStatistic;
};
