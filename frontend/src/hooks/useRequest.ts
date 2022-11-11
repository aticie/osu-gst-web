import axios, { AxiosRequestConfig } from "axios";
import { useNotify } from "./useNotify";

export const useRequest = async <T>(config: AxiosRequestConfig) => {
  try {
    const response = await axios<T>(config);
    return response.data;
  } catch(error) {
    if (!axios.isAxiosError(error)) return;

    useNotify(error.response?.data.detail);
  }
}
