import axios from 'axios';
import dotenv from 'dotenv';
import {AdvertData} from './types';

dotenv.config();



/**
 * Parses token, removes first part from eader
 * @param wholeToken Whole token with text "bearer"
 * @returns parsed token or empty string
 */
export function parseToken(wholeToken:string) {
    const splitted:Array<string> = wholeToken.split(' ');
    if (splitted.length === 2) return splitted[1];
    else return '';
}

/**
 * Posts data to Materiaalitori test api
 * @param data valid data which can be posted to Materiaalitori
 * @param token got from request header
 * @returns id of new advert or error
 */
export async function postAdvert(data:AdvertData, token:string) {
    try {
        // const token1 = await getToken(clientId,clientSecret,scope);
        const config = {
            method: 'post',
            url: 'https://test.materiaalitori.fi/api/rfo',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": 'Bearer ' + token,
            },
            data: data,
        };
        const response = await axios(config);
        return { id: response.data.id };
    } catch (err) {
    if (axios.isAxiosError(err)) {
        console.log('error message: ', err.message);
        throw err;
    } else {
        console.log('unexpected error: ', err);
        throw err;
    }
  }
}