import axios from "axios";
import { getItemFromStorage } from "./secure-storage";

const axiosInstance = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_URL}/api`,
});

axiosInstance.interceptors.request.use(async function (config) {
  config.headers.Authorization = `Bearer ${await getItemFromStorage("accessToken")}`;
  return config;
});

export function getAxiosInstance() {
  return axiosInstance;
}
