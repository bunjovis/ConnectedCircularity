/* eslint-disable no-undef */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('itemDraft', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID,
      },
      itemId: {
        allowNull: false,
        type: Sequelize.UUID,
        unique: true,
        onDelete: 'CASCADE',
        references: {
          model: 'item',
          key: 'id',
          as: 'itemId',
        },
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      material: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      industry: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      materialDescription: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      materialAmount: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      materialUnit: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      materialInfo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      locationName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      locationAddress: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      locationZipCode: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      locationMunicipality: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      expiryDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      contactName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contactPhone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contactEmail: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable('itemDraft');
  },
};
