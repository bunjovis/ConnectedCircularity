// Mt service routes
import { Router, Request, Response } from "express";
import {postAdvert} from '../handleData';

const mtRouter = Router();

mtRouter.post('/advert',async (req:Request, res:Response) => {
    const response = await postAdvert();
    res.send(response);
}
);

export default mtRouter;