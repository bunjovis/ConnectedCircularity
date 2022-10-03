import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Connected Circularity Backend with TypeScript up and running!");
});
app.listen(port, () => {
  console.log(` [server]: Server listening at http://localhost:${port}`);
});
