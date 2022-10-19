import { Router, Request, Response, NextFunction } from 'express';

import { getUsers, getUserById } from '../services/userService';

export const userRoutes = Router();

userRoutes.get(
  '/users',
  async (_request: Request, response: Response, next: NextFunction) => {
    try {
      const users = await getUsers();
      response.status(200).json(users);
    } catch (err) {
      response.status(500);
      next(err);
    }
  }
);

userRoutes.get(
  '/users/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const user = await getUserById(request.params.id);
      response.status(200).json(user);
    } catch (err) {
      response.status(500);
      next();
    }
  }
);
