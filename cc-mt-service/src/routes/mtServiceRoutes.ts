// Mt service routes
import { Router, Request, Response } from "express";
import {postAdvert} from '../handleData';
import { AdvertData } from "../types";

const mtRouter = Router();

mtRouter.post('/advert',async (req:Request, res:Response) => {
    let advert = await postAdvert();
    res.send(advert);
}
);

export default mtRouter;