import axios from "axios"
import { User } from "../Models/User";

export const joinTeam = async (team_hash: string) => {
  const response = await axios.post<User>("/team/join", {}, { params: team_hash });
  return response.data;
}
