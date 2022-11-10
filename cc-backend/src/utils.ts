import axios from 'axios';
import { Error, ItemInfo, Item, Config, ApiConfig, LoginResponse } from './types';
import jwt, { Secret } from 'jsonwebtoken';

export async function getItemsPK(token: any, userId: string) {
  try {
    const response = axios.get<Item[]>(
      `${process.env.CC_PK_SERVICE_URL}/v1/users/${userId}/items`,
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
      `${process.env.CC_DB_SERVICE_URL}/items/${userId}`,
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
      `${process.env.CC_PK_SERVICE_URL}//v1/items/${itemId}`,
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

export async function getTokens(apiId: string, username: string, password: string) {
  const response = await axios.get<ApiConfig>(
    `${process.env.CC_DB_SERVICE_URL}/v1/apis/${apiId}`
  );

  if (response.data === null) {
    return "Invalid API id";
  }

  const loginResponse = await axios.get<LoginResponse>(
    `${response.data.authEndpoint}`, {
      data: {
        username: username,
        password: password
      }, 
      headers: {
        Accept: 'application/json'
      }
    }
  );

  if (!loginResponse.data.userId || !loginResponse.data.accessToken) {
    throw { response: {
      statusText:"Invalid credentials",
      status: 401
    }};
  }
  
  const jwtSecret: Secret = process.env.JWT_SECRET as string;
  const token = jwt.sign({
    userId: loginResponse.data.userId
  }, jwtSecret, {
    expiresIn: "2h"
  });
  
  return { accessToken: loginResponse.data.accessToken, backendToken: token};
}