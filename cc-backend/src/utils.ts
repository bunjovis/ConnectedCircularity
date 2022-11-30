import axios from 'axios';

import {
  Error,
  ItemInfo,
  Item,
  Config,
  AdvertData,
  ApiConfig,
  LoginResponse,
  UserInfo
} from './types';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

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
      throw error;
    } else {
      console.log('unexpected error: ', error);
      throw error;
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
    const { data, status } = await axios.get<ItemInfo>(
      `${process.env.CC_PK_SERVICE_URL}/v1/items/${itemId}`,
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

export async function postAdvert(token: any, advert: AdvertData) {
  try {
    const postConfig = {
      method: 'post',
      url: `${process.env.CC_MT_SERVICE_URL}/v1/advert`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      data: advert
    };
    const status = await axios(postConfig);
    console.log('response status is: ', status.status || 201);
    console.log('response id: ', status.data);
    return status; //{ status: status.status || 201, id: status.data };
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
export async function getTokens(
  apiId: string,
  username: string,
  password: string
) {
  const response = await axios.get<ApiConfig>(
    `${process.env.CC_DB_SERVICE_URL}/v1/apis/${apiId}`
  );

  if (response.data === null) {
    throw {
      response: {
        statusText: 'Invalid API id',
        status: 500
      }
    };
  }

  const loginResponse = await axios.post<LoginResponse>(
    `${response.data.authEndpoint}`,
    {
      data: {
        username: username,
        password: password
      },
      headers: {
        Accept: 'application/json'
      }
    }
  );
  console.log(loginResponse.data);
  if (!loginResponse.data.userId || !loginResponse.data.accessToken) {
    throw {
      response: {
        statusText: 'Invalid credentials',
        status: 401
      }
    };
  }

  const jwtSecret: Secret = process.env.JWT_SECRET as string;
  const token = jwt.sign(
    {
      userId: loginResponse.data.userId
    },
    jwtSecret,
    {
      expiresIn: '2h'
    }
  );

  return { accessToken: loginResponse.data.accessToken, backendToken: token };
}
export async function saveUser(
  token: string,
  apiId: string,
  username: string,
  id: string
) {
  const response = await axios.post<UserInfo>(
    `${process.env.CC_DB_SERVICE_URL}/v1/users`,
    {
      api: apiId,
      username: username,
      id: id
    },
    {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      }
    }
  );

  if (response.data === null) {
    throw {
      response: {
        statusText: 'Saving user failed',
        status: 500
      }
    };
  }
}
export async function getUserIdFromToken(token: string) {
  const decodedToken = jwt.decode(token);
  if (decodedToken === null) {
    throw {
      response: {
        statusText: "Can't decode token",
        status: 500
      }
    };
  } else {
    return (decodedToken as JwtPayload).userId;
  }
}
export async function postPKStatistics(itemId: string, success: boolean) {
  const requestData = {
    id: itemId,
    success: success,
  };
  try {
    const response = await axios.post(
      `${process.env.CC_DB_SERVICE_URL}/v1/apistatistics/Purkukartoitus/unique`,
        requestData,
        {
          headers: {
            Accept: 'application/json'
          }
        }
    );
    return response;
  }
  catch (err:any) {
    return null;
  }
  
}
export async function postMTStatistics(success: boolean) {
  const requestData = {
    success: success,
  };
  try {
    const response = await axios.post(
      `${process.env.CC_DB_SERVICE_URL}/v1/apistatistics/Materiaalitori/adverts`,
        requestData,
        {
          headers: {
            Accept: 'application/json'
          }
        }
    );
    return response;
  }
  catch (err:any) {
    return null;
  }
  
}