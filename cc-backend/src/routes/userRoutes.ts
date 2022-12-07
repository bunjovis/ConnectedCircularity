import { Router, Request, Response } from "express";
import { postConfigToDB, getTokens, saveUser, getUserIdFromToken } from "../utils";

const userRouter = Router();

userRouter.post(
  "/v1/config/:userId",
  (request: Request, response: Response) => {
    const status = postConfigToDB(request.body);
    response.send(status);
  }
);

userRouter.post(
  "/v1/login/:apiId",
  async (request: Request, response: Response) => {
    try {
      const tokens = await getTokens(request.params.apiId, request.body.username, request.body.password);
      const userId = await getUserIdFromToken(tokens.backendToken);
      await saveUser(tokens.backendToken, request.params.apiId, request.body.username, userId);
      response.send(tokens);
    }
    catch (error:any) {
      console.log(error);
      if (!error.response) {
        response.status(500);
        response.json({
          message: "Error",
          status: 500
        });
      }
      else {
        response.status(error.response.status || 500);
        response.json({
          message: error.response.statusText || "Error",
          status: error.response.status || 500
        });
      }
      
    }
  }
);

userRouter.post("/v1/user", (request: Request, response: Response) => {
  // For testing
  const apiName = request.body.api;
  const username = request.body.username;
  console.log(apiName);
  console.log(username);
  console.log(request.body);
  response.send(request.body);
});

export default userRouter;
