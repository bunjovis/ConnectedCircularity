// Mt service routes
import { Router, Request, Response } from "express";
import {postAdvert} from '../handleData';
import {Error} from '../types';

const mtRouter = Router();

mtRouter.post('/advert',async (req:Request, res:Response) => {
    const response = await postAdvert().catch(e => console.log(e));
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