import { Team } from "./Team";

export interface Map {
  id: string,
  mapId: number,
  mods: string,
  artist: string,
  title: string,
  difficulty: string,
  sr: number,
  bpm: number,
  length: string,
  cs: number,
  ar: number,
  od: number,
  mapset: string
}

export interface CalculatedTeam extends Team {
  averageBwsRank: number
}
