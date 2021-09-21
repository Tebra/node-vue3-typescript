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
    const data: any = req.body;
    User.create(
      new User({
        username: data.username,
        password: data.password, // TODO: Add hashing
        email: data.email,
        role: data.role,
        name: data.name,
      })
    )
      .then((user: User) => res.send(user.id))
      .catch((err: SequelizeScopeError) => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while creating the user.',
        });
      });
  }
}

export default new UserController();
