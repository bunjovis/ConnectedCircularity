// Mt service route module
import { Router, Request, Response } from 'express';
import { postAdvert, parseToken } from '../handleData';
import { AdvertData, Error } from '../types';

const mtRouter = Router();

// Route for posting a new advert: /v1/advert
mtRouter.post('/advert', async (req: Request, res: Response) => {
  try {
    const data: AdvertData = req.body;
    const wholeToken = req.headers.authorization ?? '';
    const token: string = parseToken(wholeToken);
    if (token.length === 0) {
      const err: Error = {
        message: 'No valid token available',
        status: 401
      };
      res.json(err);
    } else {
      const response = await postAdvert(data, token);
      res.send(response);
    }
  } catch (err: any) {
    res.status(err.response.status || 500);
    res.json({
      message: err.response.statusText || 'Error',
      status: err.response.status || 500
    });
  }
});

export default mtRouter;
