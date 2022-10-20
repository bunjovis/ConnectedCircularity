import { Api } from '../models/api';

export const getApis = async () => {
  return await Api.findAll();
};
