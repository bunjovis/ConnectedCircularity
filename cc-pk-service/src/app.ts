import express, {NextFunction, Request, Response} from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import * as OpenApiValidator from 'express-openapi-validator';

import { Survey, Item, Error } from './types';

dotenv.config();

// Variables
const PORT = process.env.PORT;
const username: string = process.env.PK_USERNAME ?? '';
const password: string = process.env.PK_PASSWORD ?? '';
const c_id: string = process.env.PK_CLIENTID ?? '';
const g_type: string = process.env.PK_GRANTTYPE ?? '';
const path = `/v1`;
const userpath = `/v1/${username}`;

// Setting up a server for received data
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.listen(PORT, () => {
  return console.log('Express server for Purkukartoitus service is running.');
});

const options = {
  customCss: '.swagger-ui .topbar { display: none }',
};
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(YAML.load('./openapi.yaml'), options)
);


app.use(
  OpenApiValidator.middleware({
    apiSpec: './openapi.yaml',
    validateRequests: true,
    validateResponses: false,
  })
);

app.use(
  (err: Error, req: Request, res: Response, __:NextFunction) => {
    // format error
    res.status(err.status || 500).json({
      message: err.message,
    });
  }
);


serviceStart();
/**
 * Examples of calling the functions
 * This will be in the initial version, so it's clearer how the data is fetched
 * This function goes through all the methods, so if one of them gives an error -> the rest will give an error too
 */
async function serviceStart() {
  // User information
  const userToken = await getToken(username, password);
  const userId = await getId(userToken);
  console.log(userId); // Help checking the path with userId 

  // Data collecting and handling
  const groupSurveys = await getSurveys(userToken);
  const userSurveys = handleSurveys(groupSurveys, userId);
  const reusableItems = await getReusables(userToken, userSurveys);
  const reusableItemsPK = await getReusablesPK(userToken, userSurveys);
  
  // Ping - pong
  app.get('/v1/system/ping', (_, res) => {
    res.send('pong');
  });
  
  // Show all user surveys on the same path
  const surveysPath = `${userpath}/surveys`;
  app.get(surveysPath, (_, res) => {
    res.json(userSurveys);
  })

  // Show user surveys on their own paths
  for (let i = 0; i < userSurveys.length; i++) {
    const surveyPath = `${surveysPath}/${userSurveys[i].id}`;
    app.get(surveyPath, (_, res) => {
      res.json(userSurveys[i]);
    })
  }

  // Show user's reusable items from surveys
  const itemsPath = `${path}/items/${userId}`;
  app.get(itemsPath, (_, res) => {
    res.json(reusableItems);
  })

  // Show user's reusable items from surveys with the information that PK provides
  const itemsPKPath = `${path}/items`;
  for (let i = 0; i < reusableItemsPK.length; i++) {
    const itemPath = `${itemsPKPath}/${reusableItemsPK[i].id}`;
    app.get(itemPath, (_, res) => {
      res.json(reusableItemsPK[i]);
    })
  }
}

/**
 * Get token for the current user, so accessing the Purkukartoitus API is possible
 * @param user Username
 * @param pw Password
 * @returns Token for accessing the Purkukartoitus API
 */
async function getToken(user:string, pw:string) {
  try {
    const response = axios.post(
      'https://auth.purkukartoitus.fi/auth/realms/rapurc/protocol/openid-connect/token',
      new URLSearchParams({
          'client_id': c_id,
          'grant_type': g_type,
          'username': user,
          'password': pw
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
 * @returns 
 */
async function getId(token:string) {
  try {
    const response = axios.get('https://auth.purkukartoitus.fi/auth/realms/rapurc/account', {
      headers: {
          'Authorization': 'Bearer ' + token
      }
    });
    return (await response).data.id;
  } catch (err) {
    console.log('Error: cannot fetch id for the current user');
    return '';
  }
}

/**
 * Get every survey the group has created
 * @param token User's token for accessing PK API
 * @returns List of group's surveys
 */
async function getSurveys(token:string) {
  try {
    const response = axios.get('https://api.purkukartoitus.fi/v1/surveys', 
    {
      params: {
          'maxResults': '2147483647'
      },
      headers: {
          'Authorization': 'Bearer ' + token
      }
    }
    );
    return (await response).data;
  } catch (err) {
    console.log('Error: cannot fetch surveys');
    return [];
  }
}

async function getReusables(token:string, userSurveys:Survey[]) {
  try {
    const items = [];
    for (let i = 0; i < userSurveys.length; i++) {
      const responseReuse = axios.get(`https://api.purkukartoitus.fi/v1/surveys/${userSurveys[i].id}/reusables`, 
      {
        headers: {
            'Authorization': 'Bearer ' + token
        }
      }
      );
      const fetchedItems = (await responseReuse).data;

      const responseBuilding = axios.get(`https://api.purkukartoitus.fi/v1/surveys/${userSurveys[i].id}/buildings`, 
      {
        headers: {
            'Authorization': 'Bearer ' + token
        }
      }
      );
      const fetchedBuildings = (await responseBuilding).data;

      for (let j = 0; j < fetchedItems.length; j++) {
        let item = {
          reusableId: fetchedItems[j].id,
          componentName: fetchedItems[j].componentName,
          surveyId: userSurveys[i].id,
          streetAddress: fetchedBuildings[0].address.streetAddress
        }
        items.push(item);
      }
    }
    return items;
  } catch (err) {
    console.log('Error: cannot fetch reusable items');
    return [];
  }
}

async function getReusablesPK(token:string, userSurveys:Survey[]) {
  try {
    const items = [];
    for (let i = 0; i < userSurveys.length; i++) {
      const responseReuse = axios.get(`https://api.purkukartoitus.fi/v1/surveys/${userSurveys[i].id}/reusables`, 
      {
        headers: {
            'Authorization': 'Bearer ' + token
        }
      }
      );
      const fetchedItems = (await responseReuse).data;

      for (let j = 0; j < fetchedItems.length; j++) {
        items.push(fetchedItems[j]);
      }
    }
    return items;
  } catch (err) {
    console.log('Error: cannot fetch reusable items');
    return [];
  }
}

/**
 * Filters data so that only current user's surveys that are ready are returned
 * @param allSurveys List of surveys that are filtered
 * @param id Whose surveys we are looking for
 * @returns List of user specific surveys
 */
function handleSurveys(allSurveys:Survey[], id:string) {
  const surveys = [];
  for (let i = 0; i < allSurveys.length; i++) {
    if (allSurveys[i].metadata.creatorId === id && allSurveys[i].status === 'DONE') surveys.push(allSurveys[i]);
  }
  return surveys;
}
