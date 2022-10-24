import express, { response } from 'express'
import axios from 'axios'
import dotenv from 'dotenv';
import qs from 'qs'

dotenv.config();

// variables
const PORT = process.env.PORT;
const c_id: string = process.env.MT_CLIENTID ?? '';
const c_secret: string = process.env.MT_CLIENTSECRET ?? '';
const scope: string = process.env.MT_SCOPE ?? '';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true,}));
app.get("/", (req, res) => {
  res.send("Adverts will be posted in future");
});
app.listen(PORT, () => {
  console.log(` [server]: Server listening at http://localhost:${PORT}`);
});

showToken(c_id,c_secret,scope);
/**
 * Shows Materiaalitori access token in console (just for testing)
 * @param c_id 
 * @param c_secret 
 * @param scope 
 */
async function showToken(c_id:string, c_secret:string, scope:string) {
  const token = await getToken(c_id, c_secret, scope);
  console.log(token);
}

/**
 * Get token to use test.materiaalitori.fi API to make possible to add adverts
 * @param client 
 * @param secret 
 * @param scope 
 * @returns token to Materiaalitori API
 */
async function getToken(client:string, secret:string, scope:string) {
  try {
    const data = qs.stringify({
      'client_secret': secret,
      'client_id': client,
      'grant_type': 'client_credentials',
      'scope': scope
    });
    const config = {
      method: 'post',
      url: 'https://test-auth.materiaalitori.fi/connect/token?grant_type=client_credentials&scope=' + scope,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    const response = await axios(config);
    const responseStr = JSON.stringify(response.data.access_token);
    return responseStr
  } catch (error) {
    console.log(error);
  }
}