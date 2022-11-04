/* eslint-disable no-undef */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('itemStatistic', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID,
      },
      itemId: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'item',
          key: 'id',
          as: 'itemId',
        },
      },
      title: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      material: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      industry: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      materialDescription: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      materialAmount: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      amountUnit: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      amountInfo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      locationName: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      zipCode: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      municipality: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      contactRole: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      contactPhone: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('itemStatistic');
  },
};
