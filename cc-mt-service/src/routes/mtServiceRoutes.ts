// Mt service routes
import { Router, Request, Response } from "express";
import {postAdvert,postImage} from '../handleData';
import {AdvertData,Error} from '../types';
//import multer from 'multer';
//const upload = multer({dest: 'uploads/'});

const mtRouter = Router();

mtRouter.post('/image', async (req:any, res:Response) => {
    const image = req.files.file;

    //console.log(image);
    const resp = await postImage(image).catch(e=>console.log(e));
    if (resp) res.send(resp);
    else res.json("error");
    //res.json("test");
})

mtRouter.post('/advert',async (req:Request, res:Response) => {
    const data:AdvertData = req.body;
    console.log(data);
    // should include attributes type and data but data is undefined
    const response = await postAdvert(data).catch(e => console.log(e));
    if (response) res.send(response);
    else {
        const err:Error = {
            message:"Cannot add advert",
            status: 400
        };
        res.json(err);
    }
}
);

export default mtRouter;