import axios from "axios"
import { Team } from "../Models/Team";

export const getTeams = async () => {
  const response = await axios.get<Team[]>("/teams");
  return response.data;
}
