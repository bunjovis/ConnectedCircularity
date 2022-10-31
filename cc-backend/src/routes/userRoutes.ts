import { Router, Request, Response } from "express";
import { postConfigToDB } from "../utils";
import { Error, ItemInfo, Item } from "../types";

const userRouter = Router();

userRouter.post(
  "/v1/config/:userId",
  (request: Request, response: Response) => {
    const status = postConfigToDB(request.body);
    response.send(status);
  }
);

userRouter.post("/v1/user", (request: Request, response: Response) => {
  // For testing
  const api_name = request.body.api;
  const username = request.body.username;
  console.log(api_name);
  console.log(username);
  console.log(request.body);
  response.send(request.body);
});

export default userRouter;
