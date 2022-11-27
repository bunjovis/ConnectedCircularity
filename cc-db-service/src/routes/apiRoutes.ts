import { Router, Request, Response, NextFunction } from 'express';

import { getApis, getApi, getApiStatistics, getApiStatisticsCounts, postApiStatistics } from '../services/apiService';
import { HttpResponseError } from '../types';

export const apiRoutes = Router();

apiRoutes.get(
  '/apis',
  async (_request: Request, response: Response, next: NextFunction) => {
    try {
      const apis = await getApis();
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

apiRoutes.get(
  '/apis/:apiId',
  async (_request: Request, response: Response, next: NextFunction) => {
    try {
      const apis = await getApi(_request.params.apiId);
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

apiRoutes.get(
  '/apistatistics/:apiName/:statisticType',
  async (_request: Request, response: Response, next: NextFunction) => {
    try {
      const apiStatistics = await getApiStatistics(_request.params.apiName, _request.params.statisticType);
      const counts = await getApiStatisticsCounts(_request.params.apiName, _request.params.statisticType);
      const statisticsResponse = {
        statisticType: _request.params.statisticType,
        apiName: _request.params.apiName,
        successCount: counts.successCount,
        failureCount: counts.failureCount,
        daily: apiStatistics
      }
      response.status(200).json(statisticsResponse);
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

apiRoutes.post(
  '/apistatistics/:apiName/:statisticType',
  async (_request: Request, response: Response, next: NextFunction) => {
    try {
      const newStatistic = await postApiStatistics(_request.params.apiName, _request.params.statisticType, _request.body);
      response.status(200).json(newStatistic);
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