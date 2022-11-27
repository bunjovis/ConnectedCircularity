import { Api } from '../models/api';
import { ApiStatistic } from '../models/apiStatistic';
import { Op, Sequelize } from 'sequelize';
import { PostApiStatisticsInterface } from '../types';

export const getApis = async () => {
  return await Api.findAll({
    where: {
      authEndpoint: {
        [Op.not]: null
      }
    }
  });
};

export const getApi = async (apiId: string) => {
  return await Api.findOne({ where: { id: apiId } });
};
const getApiIdByName = async (apiName: string) => {
  const api = await Api.findOne({ where: { name: apiName } });
  if (api !== null) {
    return api.getDataValue("id");
  }
  return null;
};

export const getApiStatistics = async (apiName: string, statisticType: string) => {
  const apiId = await getApiIdByName(apiName);
  // https://stackoverflow.com/questions/35073918/sequelize-grouping-by-date-disregarding-hours-minutes-seconds
  const counts = await ApiStatistic.findAll({
    attributes: [
        [Sequelize.literal(`DATE("createdAt")`), 'date'],
        [Sequelize.literal(`COUNT(*)`), 'count'],
        'success',
    ],
    group: ['date', 'success'],
    where: {
      statisticType: statisticType
    },
  });
  const aggregates = new Array();
  for (let i=0;i<counts.length;i++) {
    const count = counts[i];
    if (typeof count == "object") {
      const date = count.getDataValue("date");
      const countValue = count.getDataValue("count");
      const success = count.getDataValue("success");
      const arrayIndex = aggregates.findIndex(agg => agg.date === date);
      if (arrayIndex === -1) {
        if (success == false) {
          aggregates.push({ date: date, failureCount: parseInt(countValue), successCount: 0 });
        }
        else {
          aggregates.push({ date: date, successCount: parseInt(countValue), failureCount: 0 });
        }
      }
      else {
        const agg = aggregates[arrayIndex];
        if (success == false) {
          agg.failureCount = parseInt(countValue);
          aggregates[arrayIndex] = agg;
        }
        else {
          agg.successCount = parseInt(countValue);
          aggregates[arrayIndex] = agg;
        }
      }
      
    }
  }
  return aggregates;
};

export const getApiStatisticsCounts = async (apiName: string, statisticType: string) => {
  const apiId = await getApiIdByName(apiName);
  // https://stackoverflow.com/questions/35073918/sequelize-grouping-by-date-disregarding-hours-minutes-seconds
  const counts = await ApiStatistic.findAll({
    attributes: [
        [Sequelize.literal(`COUNT(*)`), 'count'],
        'success',
    ],
    group: ['success'],
    where: {
      statisticType: statisticType
    },
  });
  const aggregates = {
    failureCount: 0,
    successCount: 0
  };
  for (let i=0;i<counts.length;i++) {
    const count = counts[i];
    if (typeof count === "object") {
      const countValue = counts[i].getDataValue("count");
      const success = counts[i].getDataValue("success");
      if (success === false) {
        aggregates.failureCount = countValue;
      }
      if (success === true) {
        aggregates.successCount = countValue;
      }
    }
  }
  return aggregates;
};


export const postApiStatistics = async (apiName: string, statisticType: string, requestBody: PostApiStatisticsInterface) => {
  const apiId = await getApiIdByName(apiName);
  const success = requestBody.success;
  if (requestBody.id) {
    return await ApiStatistic.create({
      id: requestBody.id,
      api: apiId,
      success: success,
      statisticType: statisticType
    });
  }
  else {
    return await ApiStatistic.create({
      api: apiId,
      success: success,
      statisticType: statisticType
    });
  }
};