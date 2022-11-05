// Mt service routes
import { Router, Request, Response } from "express";
import {postAdvert} from '../handleData';
import {AdvertData,Error} from '../types';

const mtRouter = Router();

mtRouter.post('/advert',async (req:Request, res:Response) => {
    const data:AdvertData = req.body;
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
}
);

export default mtRouter;