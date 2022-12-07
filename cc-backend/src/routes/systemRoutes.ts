import { Router, Request, Response } from "express";

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
