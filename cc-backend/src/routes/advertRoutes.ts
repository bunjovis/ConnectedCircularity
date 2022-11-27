import { Router, Request, Response } from 'express';
import { postAdvert, getToken } from '../utils';
import { Error, ItemInfo, Item, AdvertData } from '../types';

const advertRouter = Router();

advertRouter.post(
  '/v1/advert',
  async (request: Request, response: Response) => {
    try {
      const advert: AdvertData = request.body;
      const wholeToken = request.headers.authorization ?? '';
      const token = getToken(wholeToken);
      if (token === 'Not a bearer token!') {
        console.log('Invalid token');
        response.status(498);
        response.json({
          message: 'Error, invalid token',
          status: 498
        });
      } else {
        const postToMT = await postAdvert(token, advert);
        console.log(postToMT.status);
        console.log(postToMT.data);
        response.status(postToMT.status);
        response.json(postToMT.data);
      }
    } catch (error) {
      if (!error.response) {
        console.log('Unexpected error: 500');
        response.status(500);
        response.json({
          message: 'Error',
          status: 500
        });
      } else {
        console.log(error.status);
        response.status(error.response.status || 500);
        response.json({
          message: error.response.statusText || 'Error',
          status: error.response.status || 500
        });
      }
    }
  }
);

export default advertRouter;
