import { User } from './user.model';

class UserService {
  findAll(): Promise<User[]> {
    return User.findAll();
  }

  create(user: User): Promise<User> {
    return user.save();
  }

  delete(userId: string): Promise<any> {
    return User.destroy({
      where: {
        id: userId,
      },
    });
  }
}

export default UserService;
