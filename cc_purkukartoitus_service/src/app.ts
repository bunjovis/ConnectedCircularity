/**
 * Commands:
 * "npm start" : Runs the program
 * "npm run check" : Checks for typescript errors with eslint
 */

import express = require("express");
import reader = require('readline-sync');
import axios from 'axios';

// Setting up a server for received data
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(5000, () => {
  return console.log('Express server is running.');
});

// Ask user their username and password
const username = reader.question("Username: ");
const password = reader.question("Password: ",{ hideEchoBack: true });
const path = '/' + username;


example();

/**
 * Examples of calling the functions
 * This will be in the initial version, so it's clearer how the data is fetched
 * This function goes through all the methods, so if one of them gives an error -> the rest will give an error too
 */
async function example() {
  const userToken = await getToken(username, password);
  const userId = await getId(userToken);
  const groupSurveys = await getData(userToken);
  const userSurveys = await handleData(groupSurveys, userId);
  
  const surveyPath = path + '/surveys';
  app.get(surveyPath, (req, res) => {
    res.json(userSurveys);
  })
}

/**
 * Get token for the current user, so accessing the Purkukartoitus API is possible
 * @param user Username
 * @param pw Password
 * @returns Token for accessing the Purkukartoitus API
 */
async function getToken(user, pw) {
  let token = "";
  await axios.post(
    'https://auth.purkukartoitus.fi/auth/realms/rapurc/protocol/openid-connect/token',
    new URLSearchParams({
        'client_id': 'management',
        'grant_type': 'password',
        'username': user,
        'password': pw
    })
  ).then(function (response) {
    token = response.data.access_token;
  }).catch(function () {
    console.log("Error: cannot log in and fetch token");
  });
  return token;
}

/**
 * Get user's id for filtering the list of surveys
 * @param token User's token for accessing PK API
 * @returns 
 */
async function getId(token) {
  let id = "";
  await axios.get('https://auth.purkukartoitus.fi/auth/realms/rapurc/account', {
    headers: {
        'Authorization': 'Bearer ' + token
    }
  }).then(function (response) {
    id = response.data.id;
  }).catch(function () {
    console.log("Error: cannot fetch id for the current user");
  });
  return id;
}

/**
 * Get every survey the group has created
 * @param token User's token for accessing PK API
 * @returns List of group's surveys
 */
async function getData(token) {
  let surveys = [];
  await axios.get('https://api.purkukartoitus.fi/v1/surveys', {
    params: {
        'maxResults': '2147483647'
    },
    headers: {
        'Authorization': 'Bearer ' + token
    }
  }).then(function (response) {
    surveys = response.data;
  }).catch(function () {
    console.log("Error: cannot fetch surveys");
  });
  return surveys;
}

/**
 * Filters data so that only current user's surveys that are ready are returned
 * @param allSurveys List of surveys that are filtered
 * @param id Whose surveys we are looking for
 * @returns List of user specific surveys
 */
async function handleData(allSurveys, id) {
  const surveys = [];
  for (let i = 0; i < allSurveys.length; i++) {
    if (allSurveys[i].metadata.creatorId == id && allSurveys[i].status == 'DONE') surveys.push(allSurveys[i]);
  }
  return surveys;
}
