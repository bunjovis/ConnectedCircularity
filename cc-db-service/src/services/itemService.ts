import { Item } from '../models/item';
import { ItemDraft } from '../models/itemDraft';
import { FormConfiguration } from '../models/formConfiguration';
import { FormContact } from '../models/formContact';
import { FormLocation } from '../models/formLocation';

export const getItems = async () => {
  return await Item.findAll();
};

export const getItemById = async (id: string) => {
  return await Item.findByPk(id);
};

export const findDraft = async (itemId: string) => {
  return await ItemDraft.findOne({ where: { item_id: itemId } });
};

export const findConfiguration = async (collectionId: string) => {
  return await FormConfiguration.findAll({});
};

export const getConfigurations = async () => {
  return await FormConfiguration.findAll({ include: { all: true } });
};
