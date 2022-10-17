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

app.get('/v1/items/:userId', (request: Request, response: Response) => {
  const itemsPK = getItemsPK(request.params.userId);
  const itemsDB = getItemsDB(request.params.userId);
  response.write(itemsPK);
  response.write(itemsDB);
  response.send();
});

app.get('/v1/items:itemId', (request: Request, response: Response) => {
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
    const { data, status } = await axios.get<Item>(
      `http://localhost:5001/items/${userId}`,
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
