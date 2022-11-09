import axios from "axios"

export interface Player {
  discord_id: string,
  discord_avatar_url: string,
  discord_tag: string,
  osu_avatar_url: string,
  osu_global_rank: number,
  osu_id: number,
  osu_username: string
}

export interface Team {
  title: string,
  avatar_url: string,
  team_hash: string,
  players: Player[]
}

export const getTeams = async () => {
  const response = await axios.get<Team[]>("/teams");
  return response.data;
}
