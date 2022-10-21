import axios from 'axios';
import dotenv from 'dotenv';
import { Error, ItemInfo, Item, Config } from './types';

dotenv.config();

// Variables
const username: string = process.env.PK_USERNAME ?? '';
const password: string = process.env.PK_PASSWORD ?? '';
const c_id: string = process.env.PK_CLIENTID ?? '';
const g_type: string = process.env.PK_GRANTTYPE ?? '';

let userToken:string;
export let userId:string;

// Get usertoken and userid
getUserInfo();

/**
 * Collect user info at the beginning
 */
async function getUserInfo() {
    userToken = await getToken();
    //console.log(userToken);
    userId = await getId();
    console.log(userId); // Use this to check your usedId
}

/**
* Get token for the current user, so accessing the Purkukartoitus API is possible
* @param user Username
* @param pw Password
* @returns Token for accessing the Purkukartoitus API
*/
export async function getToken() {
    try {
        const response = axios.post(
            'https://auth.purkukartoitus.fi/auth/realms/rapurc/protocol/openid-connect/token',
            new URLSearchParams({
                'client_id': c_id,
                'grant_type': g_type,
                'username': username,
                'password': password
        }));
        return (await response).data.access_token;
    } catch (err) {
        console.log('Error: cannot fetch id for the current user');
        return '';
    }
}
  
/**
* Get user's id for filtering the list of surveys
* @param token User's token for accessing PK API
* @returns User's id
*/
export async function getId() {
    try {
        const response = axios.get('https://auth.purkukartoitus.fi/auth/realms/rapurc/account', {
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
      });
      return (await response).data.id;
    } catch (err) {
      console.log('Error: cannot fetch id for the current user');
      return '';
    }
}
 


export async function getItemsPK(userId:string) {
    try {
      const response = axios.get<Item[]>(
        `http://localhost:5123/v1/users/${userId}/items`,
        {
          headers: {
            'Authorization': 'Bearer ' + userToken
        }
        },
        );
      console.log(response);
      const itemList:Item[] = (await response).data;
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
  
  export async function getItemsDB(userId:string) {
    try {
      const { data, status } = await axios.get<Item>(
        `http://localhost:4001/items/${userId}`,
        {
          headers: {
            Accept: 'application/json'
          },
        },
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
  
  export async function getItemInfo(itemId:string) {
    try {
      const { data, status } = await axios.get<Item>(
        `http://localhost:5123/v1/items/${itemId}`,
        {
          headers: {
            'Authorization': 'Bearer ' + userToken
        }
        },
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
  export async function postConfigToDB(config:Config) {
    try {
      const { status } = await axios.post<Config>(
        `http://localhost:4001/configurations`,
        {
          data: config,
          headers: {
            Accept: 'application/json'
          },
        },
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