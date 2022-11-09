import { TeamBase } from "./Team";

// export interface UserBase {
//   user_hash: string,
//   osu_id: number,
//   osu_avatar_url: string,
//   osu_username: string,
//   osu_global_rank: number,
//   discord_id: number,
//   discord_avatar_url: string,
//   discord_tag: string,
//   discord_linked: boolean,
//   osu_linked: boolean,
//   bws_rank: number,
//   badges: number,
//   team_hash: string,
//   team: Team
// }

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

export interface UserCreate extends OsuUser, DiscordUser {}
export interface TeamlessUser extends UserCreate {}

export interface User extends UserCreate {
  team: TeamBase | undefined
}
