// PK service route module
import { Router, Request, Response } from "express";
import {getToken, getReusables, getSurveys, getItemInfo, getId, userId} from "../handleData";
import { Error, ItemInfo, Survey, Item} from '../types';

// Express router for accessing the defined paths
const pkRouter = Router();

// Route which returns "pong"
// http://localhost:5123/v1/system/ping
pkRouter.get('/system/ping', (_:Request, res:Response) => {
  res.send('pong');
});

// Route which returns user's items
// http://localhost:5123/v1/users/:usedId/items
pkRouter.get('/users/:userId/items', async (req:Request, res:Response) => {
  if (req.params.userId === userId) {
    const userSurveys:Survey[] = await getSurveys();
    const reusableItems:Item[] = await getReusables(userSurveys);
    res.json(reusableItems);
  }
  else {
    const err:Error = {
      message:"not found",
      status:404
    };
    res.json(err);
  }
})

// Route which returns information about a specific item
// http://localhost:5123/v1/items/:itemId
pkRouter.get('/items/:itemId', async(req:Request, res:Response) => {
  const userSurveys:Survey[] = await getSurveys();
  const info:ItemInfo = await getItemInfo(userSurveys, req.params.itemId);
  if (req.params.itemId === info.id) res.json(info);
  else {
    const err:Error = {
      message:"not found",
      status:404
    };
    res.json(err);
  }
})

export default pkRouter;