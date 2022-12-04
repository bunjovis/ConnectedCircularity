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
          id: '70cf0c45-5c0b-4182-98df-7cc565c9f6fe',
          name: 'Purkukartoitus',
          authEndpoint:
            'http://cc-pk-service:5123/v1/login',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '45b74bba-7b0a-48ff-b2a5-91862f251f6a',
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
