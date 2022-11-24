import { Api } from '../models/api';

export const getApis = async () => {
  return await Api.findAll();
};

export const getApi = async (apiId: string) => {
  return await Api.findOne({ where: { id: apiId } });
};