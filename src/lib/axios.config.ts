import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_URL}/api`,
});

export function getAxiosInstance() {
  return axiosInstance;
}
