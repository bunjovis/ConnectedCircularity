/* eslint-disable no-undef */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const FormConfiguration = sequelize.define(
    'form_configuration',
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
      collection_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    { freezeTablename: true, tableName: 'form_configuration' }
  );
  FormConfiguration.associate = (models) => {
    FormConfiguration.belongsTo(models.User, {
      foreignKey: 'id',
    });
    FormConfiguration.hasOne(models.FormLocation, {
      onDelete: 'CASCADE',
    });
  };
  return FormConfiguration;
};
