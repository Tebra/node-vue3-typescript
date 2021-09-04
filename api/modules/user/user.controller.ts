import { Request, Response } from 'express';
import { User } from './user.model';

class UsersController {
  listAllUsers(req: Request, res: Response) {
    User.findAll()
      .then((users: Array<User>) => res.send(users))
      .catch(() => {
        res.status(500).send({
          message: `Error retrieving all users`,
        });
      });
  }
}

export default new UsersController();
