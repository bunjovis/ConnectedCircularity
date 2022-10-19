
import axios from 'axios';
import dotenv from 'dotenv';
import { Survey, ItemInfo, Item, Building } from './types';

dotenv.config();

// Variables
const username: string = process.env.PK_USERNAME ?? '';
const password: string = process.env.PK_PASSWORD ?? '';
const c_id: string = process.env.PK_CLIENTID ?? '';
const g_type: string = process.env.PK_GRANTTYPE ?? '';

var userToken:string = '';
export var userId:string = '';

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
  
/**
* Get user's surveys that are marked as DONE
* @param token User's token for accessing PK API
* @returns List of user's complete surveys
*/
export async function getSurveys() {
    try {
        const response = axios.get<Survey[]>('https://api.purkukartoitus.fi/v1/surveys', {
            params: {
                'maxResults': '2147483647'
            },
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
        });

        // Find which surveys' belong to the user
        const allSurveys:Survey[] = (await response).data;
        const surveys:Survey[] = [];
        for (let i = 0; i < allSurveys.length; i++) {
            if (allSurveys[i].metadata.creatorId === await (getId()) && allSurveys[i].status === 'DONE') surveys.push(allSurveys[i]);
        }
        return surveys;
    } catch (err) {
        console.log('Error: cannot fetch surveys');
        return [];
    }
}

/**
 * Collects user's reusable items from each survey
 * @param token User's token for accessing PK API
 * @param userSurveys User's surveys
 * @returns Array of Item's that belong to the user
 */
export async function getReusables(userSurveys:Survey[]) {
    try {
        const items:Item[] = [];
        for (let i = 0; i < userSurveys.length; i++) {
            // Collect PK API's items that belong to the survey
            const response = axios.get<ItemInfo[]>(`https://api.purkukartoitus.fi/v1/surveys/${userSurveys[i].id}/reusables`, 
            {
                headers: {
                    'Authorization': 'Bearer ' + userToken
                }
            });
            const fetchedItems:ItemInfo[] = (await response).data;
  
            // Collect PK API's buildings that belong to the survey
            const responseBuilding = axios.get<Building[]>(`https://api.purkukartoitus.fi/v1/surveys/${userSurveys[i].id}/buildings`, 
            {
                headers: {
                    'Authorization': 'Bearer ' + userToken
                }
            });
            const fetchedBuildings:Building[] = (await responseBuilding).data;
  
            // Create a new item from the fetched information
            for (let j = 0; j < fetchedItems.length; j++) {
                let item:Item = {
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

/**
 * Collects information about user's item
 * @param token User's token for accessing PK API
 * @param userSurveys User's surveys
 * @param itemId Id of the Item that we want information about
 * @returns ItemInfo -object that includes all the info PK API has to offer about the item
 */
export async function getItemInfo(userSurveys:Survey[], itemId:string) {
    try {
        for (let i = 0; i < userSurveys.length; i++) {
            const response = axios.get<ItemInfo[]>(`https://api.purkukartoitus.fi/v1/surveys/${userSurveys[i].id}/reusables`, 
            {
                headers: {
                    'Authorization': 'Bearer ' + userToken
                }
            });
            const fetchedItems:ItemInfo[] = (await response).data;
  
            // Find wanted item
            for (let j = 0; j < fetchedItems.length; j++) {
                const info:ItemInfo = fetchedItems[j];
                if (info.id === itemId) return info;
            }
        }
        return initInfo();
    } catch (err) {
        console.log('Error: cannot fetch reusable items');
        return initInfo();
    }
}