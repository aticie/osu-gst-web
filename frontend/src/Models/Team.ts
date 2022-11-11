import { TeamlessUser } from "./User"

export interface TeamBase {
  title: string,
  avatar_url: string | undefined
}

export interface TeamCreate extends TeamBase {}
export interface PlayerlessTeam extends TeamBase {}

export interface Team extends PlayerlessTeam {
  players: TeamlessUser[]
}
