// Mt service routes
import { Router, Request, Response } from "express";
import {postAdvert, postAttachment} from '../handleData';
import {AdvertData, Error} from '../types';

const mtRouter = Router();

mtRouter.post('/attachment', async (req:any, res:Response) => {
    const file = req.files.file;
    const resp = await postAttachment(file).catch(e => console.log(e));
    if (resp) res.send(resp);
    else {
        const err:Error = {
            message:"Cannot add attachment",
            status: 400
        };
        res.json(err);
    }
});

mtRouter.post('/advert', async (req:Request, res:Response) => {
    const data:AdvertData = req.body;
    console.log(data);
    // should include attributes type and data but data is undefined
    const response = await postAdvert(data).catch(e => console.log(e));
    if (response) res.send(response);
    else {
        const err:Error = {
            message:"Cannot add advert",
            status: 400
        };
        res.json(err);
    }
});

export default mtRouter;