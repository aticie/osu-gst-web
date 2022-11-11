import { PlayerlessTeam } from "./Team"
import { TeamlessUser } from "./User"

export interface Invite {
  team: PlayerlessTeam,
  inviter: TeamlessUser,
  invited: TeamlessUser
}
