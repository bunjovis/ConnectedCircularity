import { Router, Request, Response, NextFunction } from 'express';

import { createOrUpdateUser, getUsers, getUserById } from '../services/userService';
import { getItemsByUserId } from '../services/itemService';
import { HttpResponseError } from '../types';

export const userRoutes = Router();

userRoutes.get(
  '/users',
  async (_request: Request, response: Response, next: NextFunction) => {
    try {
      const users = await getUsers();
      response.status(200).json(users);
    } catch (err:any) {
      const httpError:HttpResponseError = {
        message: err.message,
        status: 500,
        error: err
      }
      next(httpError);
    }
  }
);

userRoutes.get(
  '/users/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const user = await getUserById(request.params.id);
      response.status(200).json(user);
    } catch (err:any) {
      const httpError:HttpResponseError = {
        message: err.message,
        status: 500,
        error: err
      }
      next(httpError);
    }
  }
);

userRoutes.get(
  '/users/:id/items',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const items = await getItemsByUserId(request.params.id);
      if (items === null) {
        response.status(404).json({});
      }
      response.status(200).json(items);
    } catch (err:any) {
      const httpError:HttpResponseError = {
        message: err.message,
        status: 500,
        error: err
      }
      next(httpError);
    }
  }
);

userRoutes.post(
  '/users',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const newUser = await createOrUpdateUser(request.body.username, request.body.api);
      response.status(200).json(newUser);
    } catch (err:any) {
      const httpError:HttpResponseError = {
        message: err.message,
        status: 500,
        error: err
      }
      if (err.message == "Validation error") {
        httpError.status = 400;
      }
      next(httpError);
    }
  }
);
