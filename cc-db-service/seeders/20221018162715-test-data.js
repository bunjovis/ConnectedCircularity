/* eslint-disable no-undef */
'use strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'api_configuration',
      [
        {
          id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
          name: 'Palvelunatarjoaja test',
          auth_endpoint:
            'https://auth.purkukartoitus.fi/auth/realms/rapurc/protocol/openid-connect/token',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert('user', [
      {
        id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bad',
        api: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
        name: 'rvsape',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('item', [
      {
        id: '0cdb31e8-b330-48dd-aecc-b2a92cf3d037',
        item_id: 'some-item-id',
        user_id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bad',
        status: 1,
        collection_id: 'test-collection',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('form_configuration', [
      {
        id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4daa',
        user_id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bad',
        collection_id: 'test-collection',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('form_location', [
      {
        id: uuidv4(),
        configuration_id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4daa',
        zip_code: '33100',
        address: 'Hämeenkatu 5',
        municipality: 'Pirkanmaa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('form_contact', [
      {
        id: uuidv4(),
        configuration_id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4daa',
        name: 'Saku Pitkänen',
        address: 'Hämeenkatu 18',
        email: 's.pitkanen@mail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('item_draft', [
      {
        id: uuidv4(),
        item_id: '0cdb31e8-b330-48dd-aecc-b2a92cf3d037',
        title: 'Rakennusosa',
        material: 'Betoni',
        industry: 'Purkujuttuja',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('api_configuration', null, {});
    await queryInterface.bulkDelete('user', null, {});
    await queryInterface.bulkDelete('item', null, {});
    await queryInterface.bulkDelete('form_configuration', null, {});
    await queryInterface.bulkDelete('form_contact', null, {});
    await queryInterface.bulkDelete('form_location', null, {});
    await queryInterface.bulkDelete('item_draft', null, {});
  },
};
