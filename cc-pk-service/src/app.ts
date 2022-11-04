import express, {NextFunction, Request, Response} from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import * as OpenApiValidator from 'express-openapi-validator';
import bodyParser from 'body-parser';
import { Error } from './types';
import router from './routes/pkServiceRoutes';

// Variables
const PORT = process.env.PORT;

// Setting up a server for received data
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.listen(PORT, () => {
  return console.log('Express server for Purkukartoitus service is running.');
});

const options = {
  customCss: '.swagger-ui .topbar { display: none }',
};

// Serve swagger documentation at endpoint http://localhost:5123/api-docs/
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(YAML.load('./openapi.yaml'), options)
);

// Validator which checks that the API is compatible with the openapi.yaml -document
app.use(
  OpenApiValidator.middleware({
    apiSpec: './openapi.yaml',
    validateRequests: true,
    validateResponses: false,
  })
);

app.use(
  (err: Error, req: Request, res: Response, _:NextFunction) => { // eslint will throw a warning because _ is unused
    // format error
    res.status(err.status || 500).json({
      message: err.message
    });
  }
);

app.use('/v1', router);