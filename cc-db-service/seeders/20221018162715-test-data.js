/* eslint-disable no-undef */
'use strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'apiConfiguration',
      [
        {
          id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
          name: 'Palvelunatarjoaja test',
          authEndpoint:
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
        itemId: 'some-item-id',
        userId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bad',
        status: 1,
        collectionId: 'test-collection',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('formConfiguration', [
      {
        id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4daa',
        userId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bad',
        collectionId: 'test-collection',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('formLocation', [
      {
        id: uuidv4(),
        configurationId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4daa',
        zipCode: '33100',
        address: 'Hämeenkatu 5',
        municipality: 'Pirkanmaa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('formContact', [
      {
        id: uuidv4(),
        configurationId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4daa',
        name: 'Saku Pitkänen',
        address: 'Hämeenkatu 18',
        email: 's.pitkanen@mail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('itemDraft', [
      {
        id: uuidv4(),
        itemId: '0cdb31e8-b330-48dd-aecc-b2a92cf3d037',
        title: 'Rakennusosa',
        material: 'Betoni',
        industry: 'Purkujuttuja',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('apiConfiguration', null, {});
    await queryInterface.bulkDelete('user', null, {});
    await queryInterface.bulkDelete('item', null, {});
    await queryInterface.bulkDelete('formConfiguration', null, {});
    await queryInterface.bulkDelete('formContact', null, {});
    await queryInterface.bulkDelete('formLocation', null, {});
    await queryInterface.bulkDelete('itemDraft', null, {});
  },
};
