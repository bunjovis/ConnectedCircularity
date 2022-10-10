import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import dotenv from 'dotenv';
import cors from 'cors';
import * as OpenApiValidator from 'express-openapi-validator';

import { HttpResponseError } from './types';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// serve swagger documentation at endpoint http://localhost:4001/api-docs/
const options = {
  customCss: '.swagger-ui .topbar { display: none }',
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
    validateResponses: false,
  })
);

app.use(
  (err: HttpResponseError, _: Request, res: Response, __: NextFunction) => {
    // format error
    res.status(err.status || 500).json({
      message: err.message,
      error: err.errors[0],
    });
  }
);

app.get('/', (_: Request, response: Response) => {
  response.send('CC Backend service root');
});

app.get('/v1/system/ping', (_: Request, response: Response) => {
  response.send('pong');
});

app.listen(PORT, () => {
  return console.log(`Server running on port: ${PORT}`);
});
