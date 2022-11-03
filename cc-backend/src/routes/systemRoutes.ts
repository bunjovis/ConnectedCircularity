import { Router, Request, Response } from "express";
import { getItemsPK, getItemsDB, getItemInfo, postConfigToDB } from "../utils";
import { Error, ItemInfo, Item } from "../types";

const sysRouter = Router();

sysRouter.get("/", (_: Request, response: Response) => {
  response.send(
    "Connected Circularity Backend with TypeScript up and running!"
  );
});

sysRouter.get("/v1/system/ping", (_: Request, response: Response) => {
  response.send("pong");
});

export default sysRouter;
