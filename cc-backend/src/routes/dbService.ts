import { Router, Request, Response } from "express";
import { postConfigToDB } from "../utils";
import { Error, ItemInfo, Item} from '../types';

const dbRouter = Router();
  
dbRouter.post('/v1/config/:userId', (request: Request, response: Response) => {
    const status = postConfigToDB(request.body);
    response.send(status);
  });

export default dbRouter;