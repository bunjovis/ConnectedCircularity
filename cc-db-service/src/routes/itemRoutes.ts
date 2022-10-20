import { Router, Request, Response, NextFunction } from 'express';

import { getItems, getItemById } from '../services/itemService';

export const itemRoutes = Router();

itemRoutes.get(
  '/items',
  async (_request: Request, response: Response, next: NextFunction) => {
    try {
      const apis = await getItems();
      response.status(200).json(apis);
    } catch (err) {
      response.status(500);
      next(err);
    }
  }
);

itemRoutes.get(
  '/items/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const item = await getItemById(request.params.id);
      response.status(200).json(item);
    } catch (err) {
      response.status(500);
      next();
    }
  }
);
