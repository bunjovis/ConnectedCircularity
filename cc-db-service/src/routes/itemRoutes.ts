import { Router, Request, Response, NextFunction } from 'express';
import { Model } from 'sequelize-typescript';

import { getItems, getItemById } from '../services/itemService';
import { HttpResponseError, BackendToken, ItemType } from '../types';
import jwt, { Secret } from 'jsonwebtoken';
import { getToken } from '../utils';

export const itemRoutes = Router();

const jwtSecret: Secret = process.env.JWT_SECRET as string;
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
      const wholeToken: any = request.headers.authorization ?? '';
      if(wholeToken===null || wholeToken.toString().length === 0) response.status(401).json("Not Authorized");

      const token = await getToken(wholeToken);
      const decoded = jwt.verify(token, jwtSecret);
      const item = await getItemById(request.params.id) as unknown;
      if (item !== null) {
        if ((item as ItemType).userId === (decoded as BackendToken).userId) {
          response.status(200).json(item);
        }
        else {
          const httpError:HttpResponseError = {
            message: "Forbidden",
            status: 403,
            error: "Wrong user"
          };
          next(httpError);
        }
      }
      else {
        const httpError:HttpResponseError = {
          message: "Not found",
          status: 404,
          error: "Not found"
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
