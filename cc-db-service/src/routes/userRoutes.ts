import { Router, Request, Response, NextFunction } from 'express';

import { createOrReturnUser, getUsers, getUserById, getDailyUserCount, getUserCount } from '../services/userService';
import { getItemsByUserId } from '../services/itemService';
import { BackendToken, HttpResponseError } from '../types';
import { getToken } from '../utils';
import jwt, { Secret } from 'jsonwebtoken';

export const userRoutes = Router();
const jwtSecret: Secret = process.env.JWT_SECRET as string;

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
      };
      next(httpError);
    }
  }
);

userRoutes.get(
  '/users/count',
  async (_request: Request, response: Response, next: NextFunction) => {
    try {
      const usercount = await getUserCount();
      const dailyUsersAdded = await getDailyUserCount();
      response.status(200).json({
        count: usercount,
        daily: dailyUsersAdded
      });
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

userRoutes.get(
  '/users/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const wholeToken: any = request.headers.authorization ?? '';
      if(wholeToken===null || wholeToken.toString().length === 0) response.status(401).json("Not Authorized");
      
        const token = await getToken(wholeToken);
        const decoded = jwt.verify(token, jwtSecret);
        if (request.params.id === (decoded as BackendToken).userId) {
        const user = await getUserById(request.params.id);
        response.status(200).json(user);
        }
        else {
          const httpError:HttpResponseError = {
          message: "Forbidden",
          status: 403,
          error: "Wrong user"
          };
          next(httpError);
        }   
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

userRoutes.get(
  '/users/:id/items',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const wholeToken: any = request.headers.authorization ?? '';
      if(wholeToken===null || wholeToken.toString().length === 0) response.status(401).json("Not Authorized");

      const token = await getToken(wholeToken);
      const decoded = jwt.verify(token, jwtSecret);
      if (request.params.id === (decoded as BackendToken).userId) {
        const items = await getItemsByUserId(request.params.id);
        if (items === null) {
          response.status(404).json({});
        }
        response.status(200).json(items);
      }
      else {
        const httpError:HttpResponseError = {
          message: "Forbidden",
          status: 403,
          error: "Wrong user"
        };
        next(httpError);
      }
      
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

userRoutes.post(
  '/users',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const newUser = await createOrReturnUser(request.body.username, request.body.api, request.body.id);
      response.status(200).json(newUser);
    } catch (err:any) {
      const httpError:HttpResponseError = {
        message: err.message,
        status: 500,
        error: err
      };
      if (err.message === "Validation error") {
        httpError.status = 400;
      }
      next(httpError);
    }
  }
);
