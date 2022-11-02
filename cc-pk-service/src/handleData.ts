
import axios from 'axios';
import { Survey, PkItem, Item, Building, ItemInfo, ReusableMaterial } from './types';

/**
 * Initalize an empty ItemInfo -object
 * @returns An empty ItemInfo -object
 */
function initItemInfo() {
    const info:ItemInfo = {
        title: '',
        material: '',
        unit: '',
        amount: 0,
        streetAddress: '',
        zipCode: '',
        area: '',
        images: ''
    }
    return info;
}
  
/**
* Get user's surveys that are marked as DONE
* @param token User's token for accessing PK API
* @param userId User's id
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

/**
* Get all surveys
* @param token User's token for accessing PK API
* @returns List of user's complete surveys
*/
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
        let fetchedItems:PkItem[] = []
        try {
            // Collect PK API's items that belong to the survey
            const response = axios.get<PkItem[]>(`https://api.purkukartoitus.fi/v1/surveys/${userSurveys[i].id}/reusables`, 
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
    let info:ItemInfo = initItemInfo();
    for (let i = 0; i < userSurveys.length; i++) {
        let pkItem:PkItem;

        // Get PK API's reusable item
        try {
            const response = axios.get<PkItem>(`https://api.purkukartoitus.fi/v1/surveys/${userSurveys[i].id}/reusables/${itemId}`, 
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            pkItem = (await response).data;
        } catch(err) {
            if (i !== userSurveys.length - 1) continue;
            else throw err;
        }

        let fetchedBuilding:Building;
        // Get PK API's building information
        try {
            const responseBuilding = axios.get<Building[]>(`https://api.purkukartoitus.fi/v1/surveys/${userSurveys[i].id}/buildings`, 
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            fetchedBuilding = (await responseBuilding).data[0];

        } catch(err) {
            if (i !== userSurveys.length - 1) continue;
            else throw err;
        }

        // Get PK API's reusable material by its id
        try {
            const responseMaterial = axios.get<ReusableMaterial>(`https://api.purkukartoitus.fi/v1/reusableMaterials/${pkItem.reusableMaterialId}`, 
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            const material = (await responseMaterial).data;

            // Add data to ItemInfo-object
            info = {
                title: pkItem.componentName,
                material: material.name,
                unit: pkItem.unit,
                amount: pkItem.amount,
                streetAddress: fetchedBuilding.address.streetAddress,
                zipCode: fetchedBuilding.address.postCode,
                area: fetchedBuilding.address.city,
                images: pkItem.images
            };
            return info;
        } catch(err) {
            if (i !== userSurveys.length - 1) continue;
            else throw err;
        }
    }
    return info;
}