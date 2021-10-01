import { Application, Router } from 'express';
import UserController from './user.controller';

export default (app: Application): void => {
  const router = Router();
  router.get('/users', UserController.listAllUsers);
  router.post('/users', UserController.createUser);
  app.use('/api', router);
};
