import {
  AllowNull,
  BeforeCreate,
  BeforeUpdate,
  Column,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @Unique
  @AllowNull(false)
  @Column
  username!: string;

  @AllowNull(false)
  @Column
  password!: string;

  @Unique
  @AllowNull(false)
  @Column
  email!: string;

  @Column
  fullName?: string;

  @AllowNull(false)
  @Column
  role!: number;

  @BeforeCreate
  @BeforeUpdate
  static beforeCreateHook(instance: User): void {
    instance.username = instance.username.trim();
  }
}
