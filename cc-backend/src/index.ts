import express, { Express, Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import dotenv from 'dotenv';
import cors from 'cors';
import * as OpenApiValidator from 'express-openapi-validator';
import bodyParser from 'body-parser';
import sysRouter from './routes/systemRoutes';
import itemRouter from './routes/itemRoutes';
import advertRouter from './routes/advertRoutes';
import userRouter from './routes/userRoutes';

import { Error } from './types';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(cors());

app.listen(port, () => {
  console.log(` [server]: Server listening at http://localhost:${port}`);
});

// serve swagger documentation at endpoint http://localhost:3000/api-docs/
const options = {
  customCss: '.swagger-ui .topbar { display: none }'
};

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(YAML.load('./openapi.yaml'), options)
);

//validator middleware
app.use(
  OpenApiValidator.middleware({
    apiSpec: './openapi.yaml',
    validateRequests: true,
    validateResponses: false
  })
);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  // format error
  res.status(err.code || 500).json({
    message: err.message
  });
});

app.use(itemRouter, advertRouter, userRouter, sysRouter);
