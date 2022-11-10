import axios from 'axios';
import dotenv from 'dotenv';
import qs from 'qs';
import {AdvertData} from './types';

dotenv.config();

// variables: needed still for testing
const clientId: string = process.env.MT_CLIENTID ?? '';
const clientSecret: string = process.env.MT_CLIENTSECRET ?? '';
const scope: string = process.env.MT_SCOPE ?? '';

/**
 * Get token to use test.materiaalitori.fi API to make possible to add adverts
 * @param client 
 * @param secret 
 * @param scope 
 * @returns token to Materiaalitori API
 */
async function getToken(client:string, secret:string, scope:string) {
    try {
        const data=qs.stringify({
            'client_secret':secret,
            'client_id':client,
            'grant_type':'client_credentials',
            'scope':scope
        });
        const config={
            method:'post',
            url:'https://test-auth.materiaalitori.fi/connect/token?grant_type=client_credentials&scope=' + scope,
            headers:{
              'Content-Type':'application/x-www-form-urlencoded'
            },
            data:data
        };
        const response=await axios(config);
        const responseStr=response.data.access_token;
        return responseStr;
    } catch (error) {
        console.log(error);
    }
}

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
        console.log(err);
        throw err;
    }
}