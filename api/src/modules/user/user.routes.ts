import { Application, Router } from 'express';
import UserController from './user.controller';
import UserMiddleware from './user.middleware';
import UserService from './user.service';

export default (app: Application): void => {
  const router = Router();
  const userController = new UserController(new UserService());
  router.get('/user', (req, res) => userController.listAllUsers(req, res));
  router.post('/user', (req, res) => userController.createUser(req, res));
  router.delete(
    '/user/:userId',
    UserMiddleware.validateRequiredUserBodyFields,
    UserMiddleware.extractUserId,
    (req, res) => userController.deleteUser(req, res)
  );
  app.use('/api', router);
};
