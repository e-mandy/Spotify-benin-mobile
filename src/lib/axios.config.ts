import axios from "axios";

export function getAxiosInstance() {
  console.log(process.env.EXPO_API_URL);

  return axios.create({
    baseURL: process.env.EXPO_API_URL,
  });
}
