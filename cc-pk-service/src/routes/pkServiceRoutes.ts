// PK service route module
import { Router, Request, Response, NextFunction } from "express";
import {getReusables, getUserSurveys, getAllSurveys, getItemInfo, login, refreshLogin} from "../handleData";
import {ItemInfo, Survey, Item} from '../types';

// Express router for accessing the defined paths
const pkRouter = Router();

// Route which returns "pong"
// http://localhost:5123/v1/system/ping
pkRouter.get('/system/ping', (_:Request, res:Response) => {
  res.send('pong');
});

// Route which returns user's items
// http://localhost:5123/v1/users/:usedId/items
pkRouter.get('/users/:userId/items', async (req:Request, res:Response, next:NextFunction) => {
  try {
    const token:any = req.headers.authorization ?? '';
    const userId:string = req.params.userId;

    const userSurveys:Survey[] = await getUserSurveys(token, userId);
    const reusableItems:Item[] = await getReusables(userSurveys, token);

    res.json(reusableItems);
  } catch(err:any) {
    // Unauthorized error appears, for some reason it gets thrown in here which is why try-catch -block was added here
    // AxiosError is in a different format, so the needed data is collected from err.response
    res.json({message: err.response.statusText, status: err.response.status});
  }
});

// Route which returns information about a specific item
// http://localhost:5123/v1/items/:itemId
pkRouter.get('/items/:itemId', async(req:Request, res:Response, next:NextFunction) => {
  try {
    const token:any = req.headers.authorization ?? '';
    const itemId:string = req.params.itemId;

    const surveys:Survey[] = await getAllSurveys(token);
    const info:ItemInfo = await getItemInfo(surveys, token, itemId);

    res.json(info);
  } catch(err:any) {
    // Unauthorized error appears, for some reason it gets thrown in here which is why try-catch -block was added here
    // AxiosError is in a different format, so the needed data is collected from err.response
    res.json({message: err.response.statusText, status: err.response.status});
  }
});

pkRouter.post(
  "/login",
  async (request: Request, response: Response) => {
    try {
      const tokens = await login(request.body.data.username, request.body.data.password);
      response.send(tokens);
    }
    catch (error:any) {
      response.json({
        message: error.response.statusText,
        status: error.response.status
      });
    }
  }
);

pkRouter.post(
  '/refresh',
 async (request: Request, response: Response) => {
    try {
      const tokens = await refreshLogin(request.body.data.refreshToken);
      response.send(tokens);
    } catch (error:any) {
      response.json({
        message: error.response.statusText,
        status: error.response.status
    });
  }
  });

export default pkRouter;