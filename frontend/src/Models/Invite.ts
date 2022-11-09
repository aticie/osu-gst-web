import { TeamBase } from "./Team"
import { TeamlessUser } from "./User"

export interface Invite {
  team: TeamBase,
  inviter: TeamlessUser,
  invited: TeamlessUser
}
