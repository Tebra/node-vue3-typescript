import { Application, Router } from 'express';
import UsersController from './user.controller';

export default (app: Application): void => {
  const router = Router();
  router.get('/users', UsersController.listAllUsers);
  app.use('/api', router);
};
