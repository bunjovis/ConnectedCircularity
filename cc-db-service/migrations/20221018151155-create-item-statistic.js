/* eslint-disable no-undef */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('item_statistic', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID,
      },
      item_id: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'item',
          key: 'id',
          as: 'item_id',
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
      material_description: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      material_amount: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      amount_unit: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      amount_info: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      location_name: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      zip_code: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      municipality: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      contact_role: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      contact_phone: {
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
    await queryInterface.dropTable('item_statistic');
  },
};
