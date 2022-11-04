import express from 'express';
import dotenv from 'dotenv';
import router from './routes/mtServiceRoutes';

dotenv.config();

// variables
const PORT = process.env.PORT;
const cId: string = process.env.MT_CLIENTID ?? '';
const cSecret: string = process.env.MT_CLIENTSECRET ?? '';
const scope: string = process.env.MT_SCOPE ?? '';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true,}));
app.use('/v1', router);
app.get("/", (req, res) => {
  res.send("Adverts will be posted in future");
});
app.listen(PORT, () => {
  console.log(` [server]: Server listening at http://localhost:${PORT}`);
});
