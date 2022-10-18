/* eslint-disable no-undef */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const FormLocation = sequelize.define(
    'form_location',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID4,
      },
      configuration_id: {
        type: DataTypes.UUID,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'form_configuration',
          key: 'id',
          as: 'configuration_id',
        },
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      address: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    { freezeTablename: true, tableName: 'form_location' }
  );
  FormLocation.associate = (models) => {
    FormLocation.belongsTo(models.FormConfiguration, {
      foreignKey: 'id',
    });
  };
  return FormLocation;
};
