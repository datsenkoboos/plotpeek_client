import { defineStore } from 'pinia';
import refresh from './api/refresh';
import User from './api/User';

const useAuthStore = defineStore('auth', {
  state: (): {
    authorized: boolean | null;
    user: User;
  } => {
    return {
      authorized: null,
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
      try {
        const { data } = await refresh();
        this.setUser(data.user);
        this.setAuthorized(true);
      } catch (error) {
        this.setAuthorized(false);
        throw error;
      }
    },
  },
});

export default useAuthStore;
