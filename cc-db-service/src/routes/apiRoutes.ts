import { Router, Request, Response, NextFunction } from 'express';

import { getApis } from '../services/apiService';
import { HttpResponseError } from '../types';

export const apiRoutes = Router();

apiRoutes.get(
  '/apis',
  async (_request: Request, response: Response, next: NextFunction) => {
    try {
      const apis = await getApis();
      response.status(200).json(apis);
    } catch (err:any) {
      const httpError:HttpResponseError = {
        message: err.message,
        status: 500,
        error: err
      };
      next(httpError);
    }
  }
);
