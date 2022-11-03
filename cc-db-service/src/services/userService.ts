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

export const createOrUpdateUser = async (username: string, api: string) => {
  const user = await getUserByName(username);
  if (user != null) {
    return user;
  }
  else {
    return await User.create({
      name: username,
      api: api
    });
  }
};