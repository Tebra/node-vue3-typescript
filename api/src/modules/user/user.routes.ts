import { Application, Router } from 'express';
import UserController from './user.controller';
import UserMiddleware from './user.middleware';
import UserService from './user.service';

export default (app: Application): void => {
  const router = Router();
  const userController = new UserController(new UserService());
  router.get('/user', userController.listAllUsers);
  router.post('/user', userController.createUser);
  router.delete(
    '/user/:userId',
    UserMiddleware.validateRequiredUserBodyFields,
    UserMiddleware.extractUserId,
    userController.deleteUser
  );
  app.use('/api', router);
};
