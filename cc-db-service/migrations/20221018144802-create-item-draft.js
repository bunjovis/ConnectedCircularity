/* eslint-disable no-undef */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('item_draft', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID,
      },
      item_id: {
        allowNull: false,
        type: Sequelize.UUID,
        unique: true,
        onDelete: 'CASCADE',
        references: {
          model: 'item',
          key: 'id',
          as: 'item_id',
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
      material_description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      material_amount: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      material_unit: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      material_info: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location_address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location_zip_code: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location_municipality: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      expiry_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      contact_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contact_phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contact_email: {
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
    await queryInterface.dropTable('item_draft');
  },
};
