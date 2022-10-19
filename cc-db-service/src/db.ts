import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.DB_SCHEMA || 'cc_dev',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'root',
  {
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT ? process.env.DB_PORT : '') || 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: process.env.DB_SSL == 'true',
    },
    logging: true,
    database: 'cc_dev',
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
