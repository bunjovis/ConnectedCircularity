// Typescript interfaces & type definitions
import { Model } from "sequelize-typescript";
export interface HttpResponseError {
  status: number;
  message: string;
  error: string;
}
export interface BackendToken {
  userId: string;
}
export interface ItemType {
  id: string;
  userId: string;
  itemId: string;
  status: number;
  adverdId: string;
  transferTime: string;
  collectionId: string;
}
