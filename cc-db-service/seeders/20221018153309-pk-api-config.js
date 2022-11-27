/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
'use strict';
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // Add purkukartoitus info to api_configuration table
    await queryInterface.bulkInsert(
      'apiConfiguration',
      [
        {
          id: uuidv4(),
          name: 'Purkukartoitus',
          authEndpoint:
            'http://cc-pk-service:5123/v1/login',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: 'Materiaalitori',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('apiConfiguration', null, {});
  },
};
