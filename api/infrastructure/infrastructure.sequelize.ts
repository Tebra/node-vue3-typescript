import { Sequelize } from 'sequelize-typescript';
import { User } from '../modules/user/user.model';

let sequelize: Sequelize;

const initializeSequelize = () => {
  if (!process.env.DB_HOST || !process.env.DB_NAME || !process.env.DB_USER) {
    throw new Error('Missing DB configuration in env');
  }

  if (!sequelize) {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
        },
        models: [User],
      }
    );
  }

  return sequelize;
};

export const db = { User };
export const initializedSequelize = initializeSequelize();
