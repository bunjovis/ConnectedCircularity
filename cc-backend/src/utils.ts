import axios from 'axios';
import dotenv from 'dotenv';
import { Error, ItemInfo, Item, Config } from './types';

dotenv.config();

export async function getItemsPK(token: any, userId: string) {
  try {
    const response = axios.get<Item[]>(
      `http://localhost:5123/v1/users/${userId}/items`,
      {
        headers: {
          Authorization: 'Bearer ' + token
        }
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
      `http://localhost:4001/items/${userId}`,
      {
        headers: {
          Accept: 'application/json'
        }
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
      `http://localhost:5123/v1/items/${itemId}`,
      {
        headers: {
          Authorization: 'Bearer ' + token
        }
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
export async function postConfigToDB(config: Config) {
  try {
    const { status } = await axios.post<Config>(
      `http://localhost:4001/configurations`,
      {
        data: config,
        headers: {
          Accept: 'application/json'
        }
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
