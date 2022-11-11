import { defineStore } from "pinia";
import { User } from "../Models/User";
import { useRequest } from "../hooks/useRequest";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as User | null
  }),
  actions: {
    async refreshUser() {
      const user = await useRequest<User>({
        url: "/users/me"
      });

      if (!user) return;
      this.user = user;
    }
  },
  persist: true
});
