import { defineStore } from "pinia";
import axios from "axios";

interface UserStruct {
  discord_id: string,
  discord_avatar_url: string,
  discord_tag: string,
  osu_id: number,
  osu_username: string,
  osu_avatar_url: string,
  osu_global_rank: number,
  team: {
    title: string,
    avatar_url: string,
    id: number,
    owner_id: number
  }
}

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as UserStruct | null
  }),
  actions: {
    async refreshUser() {
      const { data } = await axios.get("/users/me");
      this.user = data;
    }
  }
});
