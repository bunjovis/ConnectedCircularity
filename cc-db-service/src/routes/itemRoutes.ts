import { Router, Request, Response, NextFunction } from 'express';

import {
  getItems,
  getItemById,
  findDraft,
  findConfiguration,
  getConfigurations,
} from '../services/itemService';

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

itemRoutes.get(
  '/item-draft/:itemId',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const draft = await findDraft(request.params.itemId);
      console.log('DRAFT', draft);
      response.status(200).json(draft);
    } catch (err) {
      console.log('DRAFTERR', err);
      response.status(500);
      next();
    }
  }
);

itemRoutes.get(
  '/form-configuration',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const draft = await getConfigurations();
      console.log('CONF', draft);
      response.status(200).json(draft);
    } catch (err) {
      console.log('CONFERR', err);
      response.status(500);
      next();
    }
  }
);

itemRoutes.get(
  '/form-configuration/:collectionId',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const draft = await findConfiguration(request.params.collectionId);
      console.log('CONF', draft);
      response.status(200).json(draft);
    } catch (err) {
      console.log('CONFERR', err);
      response.status(500);
      next();
    }
  }
);
