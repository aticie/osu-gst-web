import axios from "axios";
import { Invite } from "../Models/Invite";

export const getInvites = async () => {
  const response = await axios.get<Invite[]>("/users/me/invites");
  return response.data;
}
