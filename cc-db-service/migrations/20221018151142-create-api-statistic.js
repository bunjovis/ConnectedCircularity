/* eslint-disable no-undef */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('apiStatistic', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID,
      },
      api: {
        type: Sequelize.UUID,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'apiConfiguration',
          key: 'id',
          as: 'api',
        },
      },
      success: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      statisticType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('apiStatistic');
  },
};
