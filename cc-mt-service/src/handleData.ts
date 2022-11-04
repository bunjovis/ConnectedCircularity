import axios from 'axios';
import dotenv from 'dotenv';
import qs from 'qs';
import {AdvertData} from './types';

dotenv.config();

// variables
const c_id: string = process.env.MT_CLIENTID ?? '';
const c_secret: string = process.env.MT_CLIENTSECRET ?? '';
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
        return responseStr
    } catch (error) {
        console.log(error);
    }
}

// Posts data to Materiaalitori test API
export async function postAdvert(data:AdvertData) {
    try {
        const token = await getToken(c_id,c_secret,scope);
        const config = {
            method: 'post',
            url: 'https://test.materiaalitori.fi/api/rfo',
            headers: {
                content_type: 'application/json',
                authorization: 'Bearer ' + token,
            },
            data: data,
            maxContentLength: 5000,
        };
        // const response = await axios(config);
        // return {id: response.data.id};
        return {};
    } catch (err) {
        console.log(err);
        return null;
    }
}