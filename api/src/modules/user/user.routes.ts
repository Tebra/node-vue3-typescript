import { Application, Router } from 'express';
import UserController from './user.controller';
import UserMiddleware from './user.middleware';

export default (app: Application): void => {
  const router = Router();
  router.get('/users', UserController.listAllUsers);
  router.post('/users', UserController.createUser);
  router.delete(
    '/users/:userId',
    UserMiddleware.extractUserId,
    UserController.deleteUser
  );
  app.use('/api', router);
};
