import { Router, Request, Response } from "express";
import { getItemsPK, getItemsDB, getItemInfo, postConfigToDB } from "../utils";
import { Error, ItemInfo, Item} from '../types';

const pkRouter = Router();

pkRouter.get('/v1/system/ping', (_: Request, response: Response) => {
    response.send('pong');
  });
  
pkRouter.get('/v1/items/:userId', async (request: Request, response: Response) => {
    const itemsPK = await getItemsPK(request.params.userId);
    //const itemsDB = await getItemsDB(request.params.userId);
    response.json(itemsPK);
    //response.write(itemsDB);
    //response.send();
  });
  
pkRouter.get('/v1/itemInfo/:itemId', async (request: Request, response: Response) => {
    const item = await getItemInfo(request.params.itemId);
    response.send(item);
  });
  
pkRouter.post('/v1/user', (request: Request, response: Response) => {
    // For testing
    const api_name = request.body.api; 
    const username = request.body.username;
    console.log(api_name);
    console.log(username);
    console.log(request.body);
    response.send(request.body);
  });
  
pkRouter.post('/v1/config/:userId', (request: Request, response: Response) => {
    const status = postConfigToDB(request.body);
    response.send(status);
  });

export default pkRouter;