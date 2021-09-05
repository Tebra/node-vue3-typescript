import { Application } from 'express';
import user from './modules/user/user.routes';

export default (app: Application): void => {
  user(app);
};
