import { Router, Request, Response, NextFunction } from 'express';

import { getApis } from '../services/apiService';

export const apiRoutes = Router();

apiRoutes.get(
  '/apis',
  async (_request: Request, response: Response, next: NextFunction) => {
    try {
      const apis = await getApis();
      response.status(200).json(apis);
    } catch (err) {
      response.status(500);
      next(err);
    }
  }
);
