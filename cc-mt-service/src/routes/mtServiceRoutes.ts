// Mt service route module
import e, { Router, Request, Response } from "express";
import { json } from "stream/consumers";
import {postAdvert, parseToken} from '../handleData';
import {AdvertData, Error} from '../types';

const mtRouter = Router();

// Route for posting a new advert: /v1/advert
mtRouter.post('/advert', async (req:Request, res:Response) => {
    try {
        const data:AdvertData = req.body;
        const wholeToken = req.headers.authorization ?? '';
        const token:string = parseToken(wholeToken);
        if (token.length === 0) {
            let err:Error = {
                message: "No valid token available",
                status: 401
            }
            res.json(err);
        }
        else {
            const response = await postAdvert(data, token);
            res.send(response);
        }
    } catch (err) {
        let error:Error = {
            message: err.message,
            status: err.status
        }
        res.json(err);
    }
}
);

export default mtRouter;