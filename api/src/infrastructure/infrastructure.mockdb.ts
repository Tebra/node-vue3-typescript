import { Sequelize } from 'sequelize-typescript';
import { ModelCtor } from 'sequelize-typescript/dist/model/model/model';

export default class MockDb {
  static async getInstance(models: ModelCtor[]): Promise<Sequelize> {
    const mockInstance = new Sequelize({
      validateOnly: true,
      models: models,
    });

    return await mockInstance.sync();
  }
}
