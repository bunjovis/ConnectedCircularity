import axios from 'axios';
import dotenv from 'dotenv';
import qs from 'qs';
import {AdvertData} from './types';
import FormData from 'form-data';
import fs from 'fs';
import {Blob} from 'buffer';

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
                'TE': 'trailers'
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

export async function postImage(data:any) {
    try {
        console.log(data);
        const formData = new FormData();
        //const path = './uploads/' + data.filename;

        /** 
        //const filedata = fs.readFileSync(path, {encoding:'binary', flag:'r'});
        const buffer2 = Buffer.from(JSON.stringify(data), "ascii");
        console.log(buffer2);
        const buffer3 = Buffer.from(JSON.stringify(data), "utf8");
        console.log(buffer3);
        const buffer4 = Buffer.from(JSON.stringify(data), "utf16le");
        console.log(buffer4);
        const buffer5 = Buffer.from(JSON.stringify(data), "base64");
        console.log(buffer5);
        const buffer6 = Buffer.from(JSON.stringify(data), "base64url");
        console.log(buffer6);
        const buffer7 = Buffer.from(JSON.stringify(data), "binary");
        console.log(buffer7);

        const buf = Buffer.from(JSON.stringify(data)).toString('ascii');
        const buf2= Buffer.from(buf, 'binary');
        console.log(buf2);
        const buf3= Buffer.from(buf, 'utf8');
        console.log(buf3);
        const buf4= Buffer.from(buf, 'utf16le');
        console.log(buf4);
        const buf5= Buffer.from(buf, 'base64');
        console.log(buf5);
        const buf6= Buffer.from(buf, 'base64url');
        console.log(buf6);
        const buf7= Buffer.from(buf, 'ascii');
        console.log(buf7);*/

        //const name:string = data.originalname;
        formData.append("file", data.data, data.name);

        const token = await getToken(clientId,clientSecret,scope);

        const response = await axios.post<string>('https://test.materiaalitori.fi/api/upload', formData, {
            headers: {
                "Authorization": 'Bearer ' + token
            },
        });
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}
