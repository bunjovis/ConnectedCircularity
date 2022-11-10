import { Router, Request, Response } from 'express';
import { postAdvert, getToken } from '../utils';
import { Error, ItemInfo, Item, AdvertData } from '../types';

const advertRouter = Router();

advertRouter.post(
  '/v1/advert',
  async (request: Request, response: Response) => {
    try {
      const advert: AdvertData = request.body;
      const wholeToken: any = request.headers.authorization ?? '';
      const token = getToken(wholeToken);
      const postToMT = await postAdvert(token, advert);
      response.json(postToMT);
    } catch (error: any) {
      response.json({
        message: error.response.statusText,
        status: error.response.status
      });
    }
  }
);

export default advertRouter;
