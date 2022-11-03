import { Router, Request, Response, NextFunction } from 'express';

import { getItems, getItemById } from '../services/itemService';
import { HttpResponseError } from '../types';

export const itemRoutes = Router();

itemRoutes.get(
  '/items',
  async (_request: Request, response: Response, next: NextFunction) => {
    try {
      const apis = await getItems();
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

itemRoutes.get(
  '/items/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const item = await getItemById(request.params.id);
      response.status(200).json(item);
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
