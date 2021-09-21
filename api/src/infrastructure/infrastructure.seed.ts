import faker from 'faker';
import { random, times } from 'lodash';
import { db, initializedSequelize } from './infrastructure.sequelize';

export default (): Promise<void> =>
  initializedSequelize
    // Clean tables
    .sync({ force: true, logging: console.log })
    .then(async () => {
      console.log('Populate database with fake data');
      await db.User.bulkCreate(
        times(10, () => ({
          email: faker.internet.email(),
          fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
          password: faker.internet.password(),
          role: random(1, 5),
          username: faker.internet.userName(),
        }))
      );
      console.log('Database populated');
    });
