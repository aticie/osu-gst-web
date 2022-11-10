import axios from "axios";
import { Invite } from "../Models/Invite";
import { User } from "../Models/User";

export const getInvites = async () => {
  const response = await axios.get<Invite[]>("/users/me/invites");
  return response.data;
}

export const acceptInvite = async (team_hash: string) => {
  const response = await axios.post<User>("/team/join", {}, {
    params: {
      team_hash
    }
  });

  console.log(response.data);
  return response.data;
}
