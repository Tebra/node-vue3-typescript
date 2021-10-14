import { Request, Response } from 'express';
import { SequelizeScopeError } from 'sequelize/types';
import { User } from './user.model';
import UserService from './user.service';

class UserController {
  userService: UserService;
  constructor(service: UserService) {
    this.userService = service;
  }

  listAllUsers(req: Request, res: Response): Promise<any> {
    return this.userService
      .findAll()
      .then((users: Array<User>) => res.send(users))
      .catch(() => {
        res.status(500).send({
          message: `Error retrieving all users`,
        });
      });
  }

  createUser(req: Request, res: Response): Promise<any> {
    const data: User = req.body;
    const user = new User({
      username: data.username,
      password: data.password, // TODO: Add hashing & authentication
      email: data.email,
      role: data.role,
      fullName: data.fullName,
    });

    return this.userService
      .create(user)
      .then((user) => res.status(200).json(user.id))
      .catch((err: SequelizeScopeError) => {
        res.status(500).json({
          message:
            err.message || 'Some error occurred while creating the user.',
        });
      });
  }

  deleteUser(req: Request, res: Response): Promise<any> {
    const userId = req.body.id;
    return this.userService.delete(userId).then(() =>
      res.status(200).json({
        message: 'User with id ' + userId + 'removed',
      })
    );
  }
}

export default UserController;
