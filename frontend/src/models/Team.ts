import { TeamlessUser } from "./User"

export interface TeamBase {
  title: string,
}

export interface TeamCreate extends TeamBase {}
export interface PlayerlessTeam extends TeamBase {
  team_hash: string
  avatar_url: string | undefined
}

export interface Team extends PlayerlessTeam {
  players: TeamlessUser[]
}

export interface TeamMapScore {
  teamname: string,
  map_id: string,
  score: number
}
