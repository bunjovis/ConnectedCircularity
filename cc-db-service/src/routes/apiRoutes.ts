import { Router, Request, Response, NextFunction } from 'express';

import { getApis } from '../services/apiService';

export const apiRoutes = Router();

apiRoutes.get(
  '/apis',
  async (request: Request, response: Response, next: NextFunction) => {
    console.log('GET APIS');
    try {
      const apis = await getApis();
      console.log(apis);
      response.status(200).json(apis);
    } catch (err) {
      response.status(500);
      next(err);
    }
  }
);
