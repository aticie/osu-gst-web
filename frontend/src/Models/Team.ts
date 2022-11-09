import { TeamlessUser } from "./User"

export interface TeamBase {
  title: string,
  avatar_url: string
}

export interface TeamCreate extends TeamBase {}

export interface Team extends TeamBase {
  players: TeamlessUser[]
}
