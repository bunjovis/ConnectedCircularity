import express, { Router, Request, Response, NextFunction } from 'express';

import { getUsers, getUserById } from '../services/userService';

export const userRoutes = Router();

userRoutes.get(
  '/users',
  async (request: Request, response: Response, next: NextFunction) => {
    console.log('GET ALL USERS');
    try {
      const users = await getUsers();
      console.log(users);
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
    console.log('GET USER');
    console.log(request.params);
    try {
      const user = await getUserById(request.params.id);
      console.log(user);
      response.status(200).json(user);
    } catch (err) {
      console.log(err);
      response.status(500);

      next();
    }
  }
);
