import { User } from '../models/user';

export const getUsers = async () => {
  return await User.findAll({ include: { all: true } });
};

export const getUserById = async (id: string) => {
  return await User.findByPk(id);
};

export const getUserByName = async (name: string) => {
  return await User.findOne({ where: { name: name }});
};

export const createOrReturnUser = async (username: string, api: string, id: string) => {
  const user = await getUserById(id);
  if (user !== null) {
    return user;
  }
  else {
    return await User.create({
      name: username,
      api: api,
      id: id
    });
  }
};