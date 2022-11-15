import axios from 'axios';
import { Error, ItemInfo, Item, Config, AdvertData } from './types';

export async function getItemsPK(token: any, userId: string) {
  try {
    const response = axios.get<Item[]>(
      `${process.env.CC_PK_SERVICE_URL}/v1/users/${userId}/items`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    console.log(response);
    const itemList: Item[] = (await response).data;
    console.log('response status is: ', (await response).status);
    return itemList;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export async function getItemsDB(userId: string) {
  try {
    const { data, status } = await axios.get<Item>(
      `${process.env.CC_DB_SERVICE_URL}/items/${userId}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
    console.log('response status is: ', status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export async function getItemInfo(token: any, itemId: string) {
  try {
    const { data, status } = await axios.get<Item>(
      `${process.env.CC_PK_SERVICE_URL}/v1/items/${itemId}`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    console.log('response status is: ', status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      throw error;
    } else {
      console.log('unexpected error: ', error);
      throw error;
    }
  }
}
export async function postConfigToDB(config: Config) {
  try {
    const { status } = await axios.post<Config>(
      `${process.env.CC_DB_SERVICE_URL}/configurations`,
      {
        data: config,
        headers: {
          Accept: 'application/json',
        },
      }
    );
    console.log('response status is: ', status);
    return status;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export function getToken(wholeToken: any) {
  try {
    const tokenParts = wholeToken.split(' ');
    if (tokenParts[0] !== 'Bearer') {
      return 'Not a bearer token!';
    }
    const token = tokenParts[1];
    return token;
  } catch (error) {
    console.log('unexpected error: ', error);
    return 'An unexpected error occurred';
  }
}

export async function postAdvert(token: any, advert: AdvertData) {
  try {
    const { status } = await axios.post<AdvertData>(
      `${process.env.MT_SERVICE_URL}/v1/advert`,
      {
        headers: {
          Authorization: 'Bearer ' + token
        },
        data: advert
      }
    );
    console.log('response status is: ', status);
    return status;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}
