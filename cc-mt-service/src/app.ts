import express from 'express';
import dotenv from 'dotenv';
import router from './routes/mtServiceRoutes';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';

dotenv.config();

// variables
const PORT = process.env.PORT;

const app = express();
app.use(fileUpload({
  createParentPath: true
}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/v1', router);
app.get("/", (req, res) => {
  res.send("Adverts will be posted in future");
});
app.listen(PORT, () => {
  console.log(` [server]: Server listening at http://localhost:${PORT}`);
});
