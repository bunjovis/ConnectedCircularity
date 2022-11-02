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
export async function postAdvert() {
    try {
        // Valid data which can be posted to test.materiaalitori.fi
        const dataObject:AdvertData = {
            type: "offeringMaterial",
            data: {
                title: "ovia",
                expires: "2022-12-01T22:00:00.000Z", 
                contactIsPublic: true,
                contact: {
                    name: "Firstname Lastname",
                    title: "Title",
                    phone: "123",
                    email: "a@a.fi"
                },
                materials: [ 
                    {
                        classification: "rakennusosat",
                        subClassification: "",
                        industry: "rakentaminen_ja_purkaminen",
                        isWaste: false,
                        permanent: false,
                        description: "ovia",
                        quantity: {
                            amount: 100,
                            unitOfMeasure: "kpl",
                        },
                        continuity: "onetime",
                        amountDescription: "ainakin 100",
                        location: {
                            name: "Nokia Arena",
                            address: "Kansikatu 3",
                            postalCode: "33100",
                            city: "Tampere",
                            cityId: "M_270",
                            region: "Pirkanmaa",
                            regionId: "R-5",
                            countryCode: "fi",
                        },
                        locationIsPublic: true,
                    }
                ],
                attachments: [],
                regions: []
            }
        };
        const adData:string = JSON.stringify(dataObject);
        const token = await getToken(c_id,c_secret,scope);
        const config = {
            method: 'post',
            url: 'https://test.materiaalitori.fi/api/rfo',
            headers: {
                content_type: 'application/json',
                authorization: 'Bearer ' + token,
            },
            data: adData,
            maxContentLength: 5000,
        };
        const response = await axios(config);
        return {id: response.data.id};
    } catch (err) {
        console.log(err);
        return null;
    }
}