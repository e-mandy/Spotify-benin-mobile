import axios from "axios";
import { getItemFromStorage, setItemInStorage } from "./secure-storage";

//this axios instance will retry on 401 response to get an access_token from refresh_token
//but during register or login we're expecting 401 sometimes
const axiosInstance = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_URL}/api`,
});

//this one will be used for endpoint when 401 is normal as response
const simplAxiosInstance = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_URL}/api`,
});

axiosInstance.interceptors.request.use(async function (config) {
  config.headers.Authorization = `Bearer ${await getItemFromStorage("accessToken")}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error);

    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = await getItemFromStorage("refreshToken");
        const response = await axios.post(
          `${process.env.EXPO_PUBLIC_API_URL}/api/auth/refresh-token`,
          {
            refreshToken,
          },
        );
        const { accessToken, refreshToken: newRefreshToken } = response.data;
        await setItemInStorage("accessToken", accessToken);
        await setItemInStorage("refreshToken", newRefreshToken);

        axiosInstance.defaults.headers.common["Authorization"] =
          `Bearer ${accessToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.log("Token refresh failed:", refreshError);
        console.log(error);
        // await setItemInStorage("accessToken", "");
        // await setItemInStorage("refreshToken", "");
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export function getAxiosInstance(unAuthenticatedInstance = false) {
  return unAuthenticatedInstance ? simplAxiosInstance : axiosInstance;
}
