import { Sequelize } from 'sequelize';

export const database = new Sequelize({
  database: process.env.DATABASE_NAME || 'mydb',
  dialect: 'postgres',
});
