import { Item } from '../models/item';
import { ItemDraft } from '../models/itemDraft';
import { FormConfiguration } from '../models/formConfiguration';
import { FormContact } from '../models/formContact';
import { FormLocation } from '../models/formLocation';

export const getItems = async () => {
  return await Item.findAll();
};

// Get item by id
// include possible Form configurations and draft values
export const getItemById = async (id: string) => {
  return await Item.findOne({
    where: { id: id },
    include: [
      {
        model: FormConfiguration,
        include: [FormContact, FormLocation],
      },
      {
        model: ItemDraft,
      },
    ],
  });
};
// Get item by userid
// include possible Form configurations and draft values
export const getItemsByUserId = async (id: string) => {
  return await Item.findAll({
    where: { userId: id },
    include: [
      {
        model: FormConfiguration,
        include: [FormContact, FormLocation],
      },
      {
        model: ItemDraft,
      },
    ],
  });
};