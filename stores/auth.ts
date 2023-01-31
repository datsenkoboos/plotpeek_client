import { defineStore } from 'pinia';
import refresh from './api/refresh';
import User from './api/User';

const useAuthStore = defineStore('auth', {
  state: (): {
    authorized: boolean;
    user: User;
  } => {
    return {
      authorized: false,
      user: {} as User,
    };
  },
  actions: {
    setUser(user: User): void {
      this.user = user;
    },
    setAuthorized(authorized: boolean): void {
      this.authorized = authorized;
    },
    async checkAuth(): Promise<void> {
      const { data } = await refresh();
      this.setUser(data.user);
      this.setAuthorized(true);
    },
  },
});

export default useAuthStore;
