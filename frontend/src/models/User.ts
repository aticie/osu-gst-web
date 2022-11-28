import { PlayerlessTeam } from "./Team";

interface UserBase {}

export interface OsuUser {
  osu_id: number,
  osu_username: string,
  osu_avatar_url: string,
  osu_global_rank: number | undefined,
  bws_rank: number | undefined,
  badges: number | undefined
}

export interface OsuUserCreate extends OsuUser {
  user_hash: string
}

export interface DiscordUser extends UserBase {
  discord_id: string | undefined,
  discord_avatar_url: string | undefined,
  discord_tag: string | undefined
}

export interface UserCreate extends OsuUser, DiscordUser {
  is_banned: boolean,
  is_admin: boolean
}
export interface TeamlessUser extends UserCreate {}

export interface User extends UserCreate {
  team: PlayerlessTeam | undefined
}
