import { Router, Request, Response } from "express";
import { getItemsPK, getItemsDB, getItemInfo, postConfigToDB } from "../utils";
import { Error, ItemInfo, Item} from '../types';

const mtRouter = Router();

export default mtRouter;