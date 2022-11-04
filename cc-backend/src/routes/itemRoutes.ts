import { Router, Request, Response, NextFunction } from 'express';
import {
  getItemsPK,
  getItemsDB,
  getItemInfo,
  postConfigToDB,
  getToken
} from '../utils';
import { Error, ItemInfo, Item } from '../types';

const itemRouter = Router();

itemRouter.get(
  '/v1/items/:userId',
  async (request: Request, response: Response, next: NextFunction) => {
    //request.header('Authorization');
    //console.log(request.headers.authorization);
    try {
      let wholeToken: any = request.headers.authorization ?? '';
      let token = getToken(wholeToken);
      const userId: string = request.params.userId;
      console.log('Token: ' + token);

      const itemsPK = await getItemsPK(token, userId);
      //const itemsDB = await getItemsDB(request.params.userId);
      response.json(itemsPK);
      //response.write(itemsDB);
      //response.send();
    } catch (error: any) {
      response.json({
        message: error.response.statusText,
        status: error.response.status
      });
    }
  }
);

itemRouter.get(
  '/v1/itemInfo/:itemId',
  async (request: Request, response: Response) => {
    try {
      let wholeToken: any = request.headers.authorization ?? '';
      let token = getToken(wholeToken);
      const itemId: string = request.params.itemId;
      const item = await getItemInfo(token, itemId);
      response.json(item);
    } catch (error: any) {
      response.json({
        message: error.response.statusText,
        status: error.response.status
      });
    }
  }
);

export default itemRouter;
