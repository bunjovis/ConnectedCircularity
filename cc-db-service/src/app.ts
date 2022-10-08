import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (request: Request, response: Response) => {
  response.send('CC Backend service root');
});

app.listen(PORT, () => {
  return console.log(`Server running on port: ${PORT}`);
});
