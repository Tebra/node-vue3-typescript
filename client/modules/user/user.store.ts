import { defineStore } from 'pinia';
import { User } from '@/models/user.model';
import useAxios from '@/composables/useAxios';

export type UserState = {
  users: User[];
};

export const userStore = defineStore({
  id: 'user',
  state: () =>
    ({
      users: [],
    } as UserState),

  actions: {
    async loadAllUsers() {
      this.users = await useAxios().get('/users');
    },

    async createUser(user: User) {
      await useAxios()
        .post('/users', user)
        .then(() => this.users.put(user));
    },
  },
  getters: {
    numberOfUsers(): number {
      return this.users.length;
    },
  },
});
