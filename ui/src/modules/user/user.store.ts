import { defineStore } from 'pinia';
import { User } from '@/modules/user/user.type';
import useAxios from '@/composables/useAxios';

export const userStore = defineStore({
  id: 'user',
  state: () => ({
    users: [] as User[],
  }),

  actions: {
    async loadAllUsers() {
      this.users = await useAxios().get('/users');
    },

    async createUser(user: User) {
      await useAxios()
        .post('/users', user)
        .then(() => this.users.push(user));
    },
  },
  getters: {
    numberOfUsers(): number {
      return this.users.length;
    },
  },
});
