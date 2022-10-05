import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Variables
const PORT = process.env.PORT;
const username: string = process.env.PK_USERNAME ?? '';
const password: string = process.env.PK_PASSWORD ?? '';
const c_id: string = process.env.PK_CLIENTID ?? '';
const g_type: string = process.env.PK_GRANTTYPE ?? '';
const path = `/${username}`;

// Type template for the surveys
interface surveyType {
  id: string,
  status: string,
  type: string,
  startDate: Date,
  endDate: Date,
  metadata: {
    creatorId: string,
    createdAt: Date,
    lastModifierId: string,
    modifiedAt: Date
  }
}

// Setting up a server for received data
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(PORT, () => {
  return console.log('Express server is running.');
});

showData();
/**
 * Examples of calling the functions
 * This will be in the initial version, so it's clearer how the data is fetched
 * This function goes through all the methods, so if one of them gives an error -> the rest will give an error too
 */
async function showData() {
  const userToken = await getToken(username, password);
  const userId = await getId(userToken);
  const groupSurveys = await getData(userToken);
  const userSurveys = handleData(groupSurveys, userId);
  
  // Show all user surveys on the same path
  const surveysPath = `${path}/surveys`;
  app.get(surveysPath, (req, res) => {
    res.json(userSurveys);
  })

  // Show user surveys on their own paths
  for (let i = 0; i < userSurveys.length; i++) {
    const surveyPath = `${surveysPath}/${userSurveys[i].id}`;
    app.get(surveyPath, (req, res) => {
      res.json(userSurveys[i]);
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
async function getData(token:string) {
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

/**
 * Filters data so that only current user's surveys that are ready are returned
 * @param allSurveys List of surveys that are filtered
 * @param id Whose surveys we are looking for
 * @returns List of user specific surveys
 */
function handleData(allSurveys:surveyType[], id:string) {
  const surveys = [];
  for (let i = 0; i < allSurveys.length; i++) {
    if (allSurveys[i].metadata.creatorId === id && allSurveys[i].status === 'DONE') surveys.push(allSurveys[i]);
  }
  return surveys;
}
