import { defineStore } from "pinia";
import { User } from "../Models/User";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as User | null
  }),
  actions: {
    async refreshUser() {
      const { data } = await axios.get("/users/me");
      this.user = data;
    }
  }
});
