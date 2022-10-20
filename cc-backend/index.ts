import express, { Express, Request, Response, NextFunction } from "express";
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import dotenv from 'dotenv';
import axios from 'axios';
import * as OpenApiValidator from 'express-openapi-validator';

import { Error } from './types';
import { Item } from './types';
import { UserInfo } from './types';
import { Config } from './types';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// Variables
const username: string = process.env.PK_USERNAME ?? '';
const password: string = process.env.PK_PASSWORD ?? '';
const c_id: string = process.env.PK_CLIENTID ?? '';
const g_type: string = process.env.PK_GRANTTYPE ?? '';

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// serve swagger documentation at endpoint http://localhost:3000/api-docs/
const options = {
  customCss: '.swagger-ui .topbar { display: none }',
};

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(YAML.load('./openapi.yaml'), options)
);

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

// Here for testing purposes so validator does not interfere
app.get('/', (_: Request, response: Response) => {
  response.send('Connected Circularity Backend with TypeScript up and running!');
});

//validator middleware
app.use(
  OpenApiValidator.middleware({
    apiSpec: './openapi.yaml',
    validateRequests: true,
    validateResponses: false,
  })
);

app.use(
  (err: Error, _: Request, res: Response, __: NextFunction) => {
    // format error
    res.status(err.code || 500).json({
      message: err.message
    });
  }
);

app.get('/v1/system/ping', (_: Request, response: Response) => {
  response.send('pong');
});

app.get('/v1/items/:userId', async (request: Request, response: Response) => {
  const itemsPK = await getItemsPK(request.params.userId);
  //const itemsDB = await getItemsDB(request.params.userId);
  response.json(itemsPK);
  //response.write(itemsDB);
  //response.send();
});

app.get('/v1/items/:itemId', (request: Request, response: Response) => {
  const item = getItemInfo(request.params.itemId);
  response.send(item);
});

app.post('/v1/user', (request: Request, response: Response) => {
  // For testing
  const api_name = request.body.api; 
  const username = request.body.username;
  console.log(api_name);
  console.log(username);
  console.log(request.body);
  response.send(request.body);
});

app.post('/v1/config/:userId', (request: Request, response: Response) => {
  const status = postConfigToDB(request.body);
  response.send(status);
});

app.listen(port, () => {
  console.log(` [server]: Server listening at http://localhost:${port}`);
});


async function getItemsPK(userId:string) {
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

async function getItemsDB(userId:string) {
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

async function getItemInfo(itemId:string) {
  try {
    const { data, status } = await axios.get<Item>(
      `http://localhost:5001/items/${itemId}`,
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
async function postConfigToDB(config:Config) {
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
