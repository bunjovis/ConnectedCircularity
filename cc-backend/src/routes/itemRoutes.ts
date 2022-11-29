import { Router, Request, Response, NextFunction } from 'express';
import {
  getItemsPK,
  getItemsDB,
  getItemInfo,
  postConfigToDB,
  getToken,
  postPKStatistics
} from '../utils';
import { Error, ItemInfo, Item } from '../types';

const itemRouter = Router();

itemRouter.get(
  '/v1/items/:userId',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const wholeToken: any = request.headers.authorization ?? '';
      const token = getToken(wholeToken);
      const userId: string = request.params.userId;
      const itemsPK = await getItemsPK(token, userId);
      //const itemsDB = await getItemsDB(request.params.userId);
      for (let i=0;i<itemsPK.length;i++) {
        const item = itemsPK[i];
        postPKStatistics(item.reusableId, true);
      }
      
      response.json(itemsPK);
      //response.write(itemsDB);
      //response.send();
    } catch (error: any) {
      console.log(error);
      if (!error.response) {
        response.status(500);
        response.json({
          message: 'Error',
          status: 500
        });
      } else {
        response.status(error.response.status || 500);
        response.json({
          message: error.response.statusText || 'Error',
          status: error.response.status || 500
        });
      }
    }
  }
);

itemRouter.get(
  '/v1/itemInfo/:itemId',
  async (request: Request, response: Response) => {
    try {
      const wholeToken: any = request.headers.authorization ?? '';
      const token = getToken(wholeToken);
      const itemId: string = request.params.itemId;
      const item: ItemInfo = await getItemInfo(token, itemId);
      postPKStatistics(request.params.itemId, true);
      response.json(item);
    } catch (error: any) {
      console.log(error);
      if (!error.response) {
        response.status(500);
        response.json({
          message: 'Error',
          status: 500
        });
      } else {
        response.status(error.response.status || 500);
        response.json({
          message: error.response.statusText || 'Error',
          status: error.response.status || 500
        });
      }
    }
  }
);

export default itemRouter;
