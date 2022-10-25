
import axios from 'axios';
import dotenv from 'dotenv';
import { Survey, ItemInfo, Item, Building } from './types';

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
 * Initalize an empty ItemInfo -object
 * @returns An empty ItemInfo -object
 */
function initInfo() {
    const info:ItemInfo = {
        id:'',
        componentName:'',
        reusableMaterialId:'',
        usability:'',
        amount:0,
        unit:'',
        description:'',
        images: '',
        amountAsWaste:0,
        metadata:{
            creatorId:'',
            createdAt:'',
            lastModifierId:'',
            modifiedAt: ''
        }
    }
    return info;
}

/**
 * Collect user info at the beginning
 */
async function getUserInfo() {
    userToken = await getToken();
    userId = await getId();
    //console.log(userId); // Use this to check your usedId
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
        return err;
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
      return err;
    }
}
  
/**
* Get user's surveys that are marked as DONE
* @param token User's token for accessing PK API
* @returns List of user's complete surveys
*/
export async function getUserSurveys(token:any, userId:string) {
    try {
        const response = axios.get<Survey[]>('https://api.purkukartoitus.fi/v1/surveys', {
            params: {
                'maxResults': '2147483647'
            },
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });

        // Find which surveys' belong to the user
        const allSurveys:Survey[] = (await response).data;
        const surveys:Survey[] = [];
        for (let i = 0; i < allSurveys.length; i++) {
            if (allSurveys[i].metadata.creatorId === userId && allSurveys[i].status === 'DONE') surveys.push(allSurveys[i]);
        }
        return surveys;
    } catch (err) {
        console.log('Error: cannot fetch surveys');
        throw err;
    }
}

export async function getAllSurveys(token:any) {
    try {
        const response = axios.get<Survey[]>('https://api.purkukartoitus.fi/v1/surveys', {
            params: {
                'maxResults': '2147483647'
            },
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });

        // Find which surveys' belong to the user
        const allSurveys:Survey[] = (await response).data;
        return allSurveys;
    } catch (err) {
        console.log('Error: cannot fetch surveys');
        throw err;
    }
}

/**
 * Collects user's reusable items from each survey
 * @param token User's token for accessing PK API
 * @param userSurveys User's surveys
 * @returns Array of Item's that belong to the user
 */
export async function getReusables(userSurveys:Survey[], token:any) {
    const items:Item[] = [];
    for (let i = 0; i < userSurveys.length; i++) {
        let fetchedItems:ItemInfo[] = []
        try {
            // Collect PK API's items that belong to the survey
            const response = axios.get<ItemInfo[]>(`https://api.purkukartoitus.fi/v1/surveys/${userSurveys[i].id}/reusables`, 
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            fetchedItems = (await response).data;
        } catch (err) {
            console.log(`Error: cannot fetch reusable items`);
            throw err;
        }

        try {
            // Collect PK API's buildings that belong to the survey
            const responseBuilding = axios.get<Building[]>(`https://api.purkukartoitus.fi/v1/surveys/${userSurveys[i].id}/buildings`, 
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            const fetchedBuildings:Building[] = (await responseBuilding).data;
  
            // Create a new item from the fetched information
            for (let j = 0; j < fetchedItems.length; j++) {
                const item:Item = {
                reusableId: fetchedItems[j].id,
                componentName: fetchedItems[j].componentName,
                surveyId: userSurveys[i].id,
                streetAddress: fetchedBuildings[0].address.streetAddress
            }
            items.push(item);
            }
        } catch (err) {
            // Not really an error situation, this is just used to inform which survey is missing data
            console.log(`Survey with id ${userSurveys[i].id} is missing building information`);
        }
    }
    return items;
}

/**
 * Collects information about user's item
 * @param token User's token for accessing PK API
 * @param userSurveys User's surveys
 * @param itemId Id of the Item that we want information about
 * @returns ItemInfo -object that includes all the info PK API has to offer about the item
 */
export async function getItemInfo(userSurveys:Survey[], token:any, itemId:string) {
    try {
        let info:ItemInfo = initInfo();
        for (let i = 0; i < userSurveys.length; i++) {
            const response = axios.get<ItemInfo[]>(`https://api.purkukartoitus.fi/v1/surveys/${userSurveys[i].id}/reusables`, 
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            const fetchedItems:ItemInfo[] = (await response).data;
  
            // Find wanted item
            for (let j = 0; j < fetchedItems.length; j++) {
                const fetchedInfo:ItemInfo = fetchedItems[j];
                if (fetchedInfo.id === itemId) {
                    info = fetchedInfo;
                }
            }
        }
        return info;
    } catch (err) {
        console.log('Error: cannot fetch reusable items');
        throw err;
    }
}