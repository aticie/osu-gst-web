import axios from "axios";
import { Invite } from "../models/Invite";

export const getMeInvites = async () => {
  const response = await axios.get<Invite[]>("/users/me/invites");
  return response.data;
}

export const getTeamInvites = async (team_hash: string | undefined) => {
  if (typeof team_hash === 'undefined'){
    return [];
  }
  const response = await axios.get<Invite[]>("/team/invites", {
    params: {
      team_hash: team_hash
    }
  });
  return response.data;
}