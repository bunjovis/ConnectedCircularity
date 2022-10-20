/* eslint-disable no-undef */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'form_location',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUID,
        },
        configuration_id: {
          type: Sequelize.UUID,
          allowNull: false,
          onDelete: 'CASCADE',
          references: {
            model: 'form_configuration',
            key: 'id',
            as: 'configuration_id',
          },
        },
        zip_code: {
          type: Sequelize.STRING,
        },
        address: {
          type: Sequelize.STRING,
        },
        municipality: {
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      { freezeTablename: true, tableName: 'form_location' }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('form_location');
  },
};
