import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getItemsPK, getItemInfo, postAdvert } from '../src/utils';
import { expect } from 'chai';
import { AdvertData, Item, ItemInfo, Error } from '../src/types';
import { assert } from 'chai';
import { v4 as uuid } from 'uuid';

const mock = new MockAdapter(axios);

const itemList: Item[] = [
  {
    reusableId: uuid(),
    componentName: 'Maakuoppa',
    surveyId: uuid(),
    streetAddress: 'Kumpula'
  }
];

const item: ItemInfo = {
  title: uuid(),
  material: uuid(),
  unit: uuid(),
  amount: Math.floor(Math.random() * 42),
  streetAddress: 'Pikkukakkosenposti PL 347',
  zipCode: '33101',
  area: 'Tampere 10',
  images: 'all the people'
};

const advert: AdvertData = {
  type: uuid(),
  data: {
    title: uuid(),
    expires: uuid(),
    contactIsPublic: true,
    contact: {
      name: uuid(),
      title: uuid(),
      phone: uuid(),
      email: uuid()
    },
    materials: [
      {
        classification: uuid(),
        subClassification: uuid(),
        industry: uuid(),
        ewcCode: uuid(),
        isWaste: false,
        useTsv: true,
        type: uuid(),
        permanent: true,
        description: uuid(),
        quantity: {
          amount: 42,
          unitOfMeasure: 'Motti'
        },
        continuity: 'string',
        amountDescription: 'string',
        locationIsPublic: true,
        location: {
          name: 'string',
          address: 'string',
          postalCode: 'string',
          city: 'string',
          cityId: 'string',
          region: 'string',
          regionId: 'string',
          countryCode: 'string',
          coordinates: [
            {
              type: 'string',
              lat: 61,
              lon: 59
            }
          ]
        },
        service: {
          serviceId: ['string'],
          requirements: 'string',
          duration: 'string'
        }
      }
    ],
    attachments: ['string'],
    regions: ['string']
  }
};

const itemId: string = uuid();

const userId: string = uuid();

describe('Test Routes', function () {
  it('should return List of Items', async () => {
    mock
      .onGet(`${process.env.CC_PK_SERVICE_URL}/v1/users/${userId}/items`)
      .reply(200, itemList);
    const result: Item[] = await getItemsPK('Bearer ' + uuid(), userId);
    expect(result[0].reusableId).to.equal(itemList[0].reusableId);
    expect(result[0].componentName).to.equal(itemList[0].componentName);
    expect(result[0].surveyId).to.equal(itemList[0].surveyId);
    expect(result[0].streetAddress).to.equal(itemList[0].streetAddress);
    assert.isNotNull(result);
    mock.reset();
  });

  //it('should throw error', async () => {
  //  mock
  //    .onGet(`${process.env.CC_PK_SERVICE_URL}/v1/users/${userId}/items`)
  //    .reply(404);
  //  assert.throws(
  //    () => {
  //      getItemsPK('Bearer ' + uuid(), 'wrongFormat');
  //    },
  //    Error,
  //    'Request failed with status code 404'
  //  );
  //});
  //
  it('should return item info', async () => {
    mock
      .onGet(`${process.env.CC_PK_SERVICE_URL}/v1/items/${itemId}`)
      .reply(200, item);
    const result: ItemInfo = await getItemInfo('Bearer ' + uuid(), itemId);
    expect(result.title).to.equal(item.title);
    expect(result.material).to.equal(item.material);
    expect(result.unit).to.equal(item.unit);
    expect(result.amount).to.equal(item.amount);
    expect(result.streetAddress).to.equal(item.streetAddress);
    expect(result.zipCode).to.equal(item.zipCode);
    expect(result.area).to.equal(item.area);
    expect(result.images).to.equal(item.images);

    assert.isNotNull(result);
    mock.reset();
  });

  it('should post advert', async () => {
    mock.onPost(`${process.env.MT_SERVICE_URL}/v1/advert`).reply(200);
    const status: any = await postAdvert('Bearer ' + uuid(), advert);
    expect(status).to.equal(200);

    assert.isNotNull(status);
    mock.reset();
    mock.restore();
  });
});
