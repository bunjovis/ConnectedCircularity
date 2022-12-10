import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import * as OpenApiValidator from 'express-openapi-validator';
import router from './routes/mtServiceRoutes';
import { Error } from './types';
dotenv.config();

// defining port
const PORT = process.env.PORT;


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true,}));
app.use(cors());
app.listen(PORT, () => {
  console.log(` [server]: Server listening at http://localhost:${PORT}`);
});

// apidocs in '/apidocs'
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(YAML.load('./openapi.yaml'))
  );


app.use(OpenApiValidator.middleware({
  apiSpec: './openapi.yaml',
  validateRequests: true,
  validateResponses: false
}));

app.use((err:Error, req:Request, res:Response, _: NextFunction) => {
  // eror response in json format
  res.json({
    status: err.status || 500,
    message: err.message
  });
});

app.use('/v1', router);