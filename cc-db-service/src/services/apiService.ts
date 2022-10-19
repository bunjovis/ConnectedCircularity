import { Api } from '../models/api';
import { ApiStatistic } from '../models/apiStatistic';

export const getApis = async () => {
  return await Api.findAll({ include: { all: true } });
};
