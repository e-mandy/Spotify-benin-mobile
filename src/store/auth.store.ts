import {
  IResponse,
  IUserLogin,
  IUserRegister,
} from "@/src/interfaces/user-auth.interface";
import { create } from "zustand";
import { IUser } from "../interfaces/user.interface";
import { getAxiosInstance } from "../lib/axios.config";
import { setItemInStorage } from "../lib/secure-storage";
import { notifError } from "../utils/react-toast";

type PartialIAuthState = Partial<IAuthState>;

interface IAuthState {
  isLogged: boolean;
  isLoadingAppState: boolean;
  user: IUser;
  handleLogin: (user: IUserLogin) => Promise<IResponse>;
  handleRegister: (user: IUserRegister) => Promise<IResponse>;
  fetchUser: () => Promise<PartialIAuthState>;
}

const useAuth = create<IAuthState>((set, get) => ({
  isLogged: false,
  isLoadingAppState: true,
  user: {},
  handleLogin: async (user: IUserLogin) => {
    const response = await login(user);
    set(response.data);
    return response;
  },
  handleRegister: async (user: IUserRegister) => await register(user),
  fetchUser: async () => fetchUser(set),
}));

const login = async (user: IUserLogin): Promise<IResponse> => {
  try {
    const http = getAxiosInstance();
    const { data } = await http.post("/auth/login", user);

    if (data.tempToken) {
      return {
        success: false,
        data: {
          isLogged: false,
          tempToken: data.tempToken,
        },
      };
    }

    await setItemInStorage("refreshToken", data.refreshToken);
    await setItemInStorage("accessToken", data.accessToken);
    return {
      success: true,
      data: {
        isLogged: true,
        user: data.user,
      },
    };
  } catch (error) {
    console.log(error?.response?.data, error?.response);
    notifError(error?.response?.data?.message);
    return {
      success: false,
      data: {
        isLogged: false,
        user: {},
      },
    };
  }
};

const register = async (user: IUserRegister): Promise<IResponse> => {
  try {
    const http = getAxiosInstance();
    const res = await http.post("/auth/register", user);
    return { success: true, data: { tempToken: res.data?.tempToken } };
  } catch (error) {
    console.log(error.response?.data);
    notifError(error?.response?.data?.error);
    return { success: false };
  }
};

const fetchUser = async (set: (auth: PartialIAuthState) => void) => {
  try {
    const http = getAxiosInstance();
    set({ isLoadingAppState: true });
    const { data } = await http.get("/users/profile/me");
    set({ user: data.user });
  } catch (error) {
    console.log(error.response.data);
    set({ isLogged: false, user: {} });
  } finally {
    set({ isLoadingAppState: false });
  }
  return {};
};

function logout() {}

export default useAuth;
