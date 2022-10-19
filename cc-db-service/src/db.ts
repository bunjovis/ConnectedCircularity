import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_SCHEMA || 'cc_dev',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'root',
  {
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT ? process.env.DB_PORT : '') || 5432,
    dialect: 'postgres',
    logging: process.env.DB_SCHEMA == 'cc_dev' ? console.log : false,
    database: process.env.DB_SCHEMA || 'cc_dev',
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('DB connection ok');
  })
  .catch((err) => {
    console.log('DB connection error:', err);
  });
