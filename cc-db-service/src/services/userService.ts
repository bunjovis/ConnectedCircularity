import { User } from '../models/user';
import { Sequelize } from 'sequelize';

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
export const getUserCount = async () => {
  return await User.count();
};
export const getDailyUserCount = async () => {
  // https://stackoverflow.com/questions/35073918/sequelize-grouping-by-date-disregarding-hours-minutes-seconds
  const counts = await User.findAll({
    attributes: [
        [Sequelize.literal(`DATE("createdAt")`), 'date'],
        [Sequelize.literal(`COUNT(*)`), 'count']
    ],
    group: ['date'],
  });
  const aggregates = [];
  for (let i=0;i<counts.length;i++) {
    const count = counts[i];
    if (typeof count === "object") {
      aggregates.push({ date: count.getDataValue("date"), count: count.getDataValue("count") });
    }
  }
  return aggregates;
};