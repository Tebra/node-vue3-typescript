import { Sequelize } from 'sequelize-typescript';
import { User } from '../modules/user/user.model';

let sequelize: Sequelize;

const initializeSequelize = () => {
  let isConnectionUrlDefined = false;

  if (process.env.DATABASE_URL) {
    isConnectionUrlDefined = true;
  }
  if (
    !isConnectionUrlDefined &&
    (!process.env.DATABASE_HOST ||
      !process.env.DATABASE_NAME ||
      !process.env.DATABASE_USER ||
      !process.env.DATABASE_PASSWORD)
  ) {
    throw new Error('Missing DB configuration in env');
  }

  if (!sequelize && isConnectionUrlDefined) {
    sequelize = new Sequelize(process.env.DATABASE_URL as string, {
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      models: [User],
    });
  } else if (!sequelize) {
    sequelize = new Sequelize(
      process.env.DATABASE_NAME as string,
      process.env.DATABASE_USER as string,
      process.env.DATABASE_PASSWORD as string,
      {
        host: process.env.DATABASE_HOST,
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
