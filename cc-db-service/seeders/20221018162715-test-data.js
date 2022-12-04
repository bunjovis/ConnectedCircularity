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
        name: 'test-rvsape',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('user', [
      {
        id: '82114f1c-ed8e-4ed0-ad2f-10b72bdcf347',
        api: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
        name: 'testikari',
        createdAt: new Date(2021, 1, 2),
        updatedAt: new Date(2021, 1, 2),
      },
    ]);
    await queryInterface.bulkInsert('user', [
      {
        id: '82114f1c-ed8e-4ed0-ad2f-10b72bdcf341',
        api: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
        name: 'testikari2',
        createdAt: new Date(2021, 1, 2),
        updatedAt: new Date(2021, 1, 2),
      },
    ]);
    await queryInterface.bulkInsert('user', [
      {
        id: '82114f1c-ed8e-4ed0-ad2f-10b72bdcf311',
        api: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
        name: 'testikari3',
        createdAt: new Date(2021, 3, 2),
        updatedAt: new Date(2021, 3, 2),
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
    await queryInterface.bulkInsert('item', [
      {
        id: '0cdb31e8-b330-48dd-aecc-b2a92cf3d032',
        itemId: 'some-item-id2',
        userId: '82114f1c-ed8e-4ed0-ad2f-10b72bdcf347',
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
    
    
    await queryInterface.bulkInsert('apiStatistic', [
      {
        id: uuidv4(),
        api: '70cf0c45-5c0b-4182-98df-7cc565c9f6fe',
        success: true,
        statisticType: 'unique',
        createdAt: new Date(2022, 11, 1),
        updatedAt: new Date(2022, 11, 1),
      },
    ]);
    await queryInterface.bulkInsert('apiStatistic', [
      {
        id: uuidv4(),
        api: '70cf0c45-5c0b-4182-98df-7cc565c9f6fe',
        success: true,
        statisticType: 'unique',
        createdAt: new Date(2022, 11, 1),
        updatedAt: new Date(2022, 11, 1),
      },
    ]);
    await queryInterface.bulkInsert('apiStatistic', [
      {
        id: uuidv4(),
        api: '70cf0c45-5c0b-4182-98df-7cc565c9f6fe',
        success: true,
        statisticType: 'unique',
        createdAt: new Date(2022, 11, 2),
        updatedAt: new Date(2022, 11, 2),
      },
    ]);
    await queryInterface.bulkInsert('apiStatistic', [
      {
        id: uuidv4(),
        api: '70cf0c45-5c0b-4182-98df-7cc565c9f6fe',
        success: true,
        statisticType: 'unique',
        createdAt: new Date(2022, 11, 3),
        updatedAt: new Date(2022, 11, 3),
      },
    ]);
    await queryInterface.bulkInsert('apiStatistic', [
      {
        id: uuidv4(),
        api: '45b74bba-7b0a-48ff-b2a5-91862f251f6a',
        success: true,
        statisticType: 'adverts',
        createdAt: new Date(2022, 11, 1),
        updatedAt: new Date(2022, 11, 1),
      },
    ]);
    await queryInterface.bulkInsert('apiStatistic', [
      {
        id: uuidv4(),
        api: '45b74bba-7b0a-48ff-b2a5-91862f251f6a',
        success: false,
        statisticType: 'adverts',
        createdAt: new Date(2022, 11, 2),
        updatedAt: new Date(2022, 11, 2),
      },
    ]);
    await queryInterface.bulkInsert('apiStatistic', [
      {
        id: uuidv4(),
        api: '45b74bba-7b0a-48ff-b2a5-91862f251f6a',
        success: false,
        statisticType: 'adverts',
        createdAt: new Date(2022, 11, 2),
        updatedAt: new Date(2022, 11, 2),
      },
    ]);
    await queryInterface.bulkInsert('apiStatistic', [
      {
        id: uuidv4(),
        api: '45b74bba-7b0a-48ff-b2a5-91862f251f6a',
        success: true,
        statisticType: 'adverts',
        createdAt: new Date(2022, 11, 2),
        updatedAt: new Date(2022, 11, 2),
      },
    ]);
    await queryInterface.bulkInsert('apiStatistic', [
      {
        id: uuidv4(),
        api: '45b74bba-7b0a-48ff-b2a5-91862f251f6a',
        success: true,
        statisticType: 'adverts',
        createdAt: new Date(2022, 11, 3),
        updatedAt: new Date(2022, 11, 3),
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
