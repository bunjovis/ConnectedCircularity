/* eslint-disable no-undef */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'formLocation',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUID,
        },
        configurationId: {
          type: Sequelize.UUID,
          allowNull: false,
          onDelete: 'CASCADE',
          references: {
            model: 'formConfiguration',
            key: 'id',
            as: 'configurationId',
          },
        },
        zipCode: {
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
      { freezeTablename: true, tableName: 'formLocation' }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('formLocation');
  },
};
