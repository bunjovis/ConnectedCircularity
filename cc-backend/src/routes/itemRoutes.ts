import { Router, Request, Response } from "express";
import { getItemsPK, getItemsDB, getItemInfo, postConfigToDB } from "../utils";
import { Error, ItemInfo, Item } from "../types";

const itemRouter = Router();

itemRouter.get(
  "/v1/items/:userId",
  async (request: Request, response: Response) => {
    const itemsPK = await getItemsPK(request.params.userId);
    //const itemsDB = await getItemsDB(request.params.userId);
    response.json(itemsPK);
    //response.write(itemsDB);
    //response.send();
  }
);

itemRouter.get(
  "/v1/itemInfo/:itemId",
  async (request: Request, response: Response) => {
    const item = await getItemInfo(request.params.itemId);
    response.send(item);
  }
);

export default itemRouter;
