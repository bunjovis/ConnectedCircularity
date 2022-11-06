import axios from 'axios';
import dotenv from 'dotenv';
import qs from 'qs';
import {AdvertData} from './types';

dotenv.config();

// variables
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

// Posts data to Materiaalitori test API
export async function postAdvert(data:AdvertData) {
    try {
        const token = await getToken(clientId,clientSecret,scope);
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
        return null;
    }
}