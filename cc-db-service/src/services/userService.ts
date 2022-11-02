import { User } from '../models/user';

export const getUsers = async () => {
  return await User.findAll({ include: { all: true } });
};

export const getUserById = async (id: string) => {
  return await User.findByPk(id);
};
