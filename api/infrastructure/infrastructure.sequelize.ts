import { Sequelize } from 'sequelize-typescript';
import { User } from '../modules/user/user.model';

let sequelize: Sequelize;

const initializeSequelize = () => {
  if (
    !process.env.DATABASE_URL ||
    !process.env.DATABASE_NAME ||
    !process.env.DATABASE_USER
  ) {
    throw new Error('Missing DB configuration in env');
  }

  if (!sequelize) {
    sequelize = new Sequelize(
      process.env.DATABASE_NAME,
      process.env.DATABASE_USER,
      process.env.DATABASE_PASSWORD,
      {
        host: process.env.DATABASE_URL,
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
