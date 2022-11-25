import { Team } from "./Team";
import { User } from "./User";

export interface Lobby {
  id: number,
  lobby_name: string,
  referee: User,
  date: string,
  teams: Team[]
}
