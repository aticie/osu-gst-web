import { Team } from "./Team";

export interface Lobby {
  id: number,
  lobby_name: string,
  referee: string,
  date: string,
  teams: Team[]
}
