import { Router, Request, Response } from "express";
import { getItemsPK, getItemsDB, getItemInfo, postConfigToDB } from "../utils";
import { Error, ItemInfo, Item } from "../types";

const itemRouter = Router();

itemRouter.get(
  "/v1/items/:userId",
  async (request: Request, response: Response) => {
    try {
      const itemsPK = await getItemsPK(
        request.headers.token,
        request.params.userId
      );
      //const itemsDB = await getItemsDB(request.params.userId);
      response.json(itemsPK);
      //response.write(itemsDB);
      //response.send();
    } catch (error: any) {
      response.json({
        message: error.response.statusText,
        status: error.response.status,
      });
    }
  }
);

itemRouter.get(
  "/v1/itemInfo/:itemId",
  async (request: Request, response: Response) => {
    try {
      const item = await getItemInfo(
        request.headers.token,
        request.params.itemId
      );
      response.json(item);
    } catch (error: any) {
      response.json({
        message: error.response.statusText,
        status: error.response.status,
      });
    }
  }
);

export default itemRouter;
