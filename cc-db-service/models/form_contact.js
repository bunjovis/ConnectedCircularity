/* eslint-disable no-undef */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const FormContact = sequelize.define(
    'form_contact',
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
      zip_code: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      address: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      municipality: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    { freezeTablename: true, tableName: 'form_contact' }
  );
  FormContact.associate = (models) => {
    FormContact.belongsTo(models.FormConfiguration, {
      foreignKey: 'id',
    });
  };
  return FormContact;
};
