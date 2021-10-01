import { Request, Response } from 'express';
import { SequelizeScopeError } from 'sequelize/types';
import { User } from './user.model';

class UserController {
  listAllUsers(req: Request, res: Response) {
    User.findAll()
      .then((users: Array<User>) => res.send(users))
      .catch(() => {
        res.status(500).send({
          message: `Error retrieving all users`,
        });
      });
  }

  createUser(req: Request, res: Response) {
    const data: User = req.body;
    const user = new User({
      username: data.username,
      password: data.password, // TODO: Add hashing
      email: data.email,
      role: data.role,
      fullName: data.fullName,
    });

    user
      .save()
      .then((user) => res.status(200).json(user.id))
      .catch((err: SequelizeScopeError) => {
        res.status(500).json({
          message:
            err.message || 'Some error occurred while creating the user.',
        });
      });
  }
}

export default new UserController();
