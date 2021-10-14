import { defineStore } from 'pinia';
import { User } from '@/modules/user/user.type';
import useAxios from '@/common/composables/useAxios';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: [] as User[],
  }),

  actions: {
    async loadAllUsers() {
      const response = await useAxios().get('/user');
      this.users = response.data.map((user: any) => {
        // Ugly mapping for the data table just for the example
        user.key = user.id;
        return user;
      });
    },

    async createUser(user: User) {
      await useAxios()
        .post('/user', user)
        .then(() => this.users.push(user));
    },

    async deleteUser(userKey: string) {
      await useAxios()
        .delete('/user/' + userKey)
        .then(
          () => (this.users = this.users.filter((user) => user.key != userKey))
        );
    },
  },

  getters: {
    numberOfUsers(): number {
      return this.users.length;
    },
  },
});
