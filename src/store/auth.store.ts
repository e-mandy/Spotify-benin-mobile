import {
  IResponse,
  IUserLogin,
  IUserRegister,
} from "@/src/interfaces/user-auth.interface";
import { create } from "zustand";
import { getAxiosInstance } from "../lib/axios.config";
import { notifError } from "../utils/react-toast";

interface IAuthState {
  isLogged: boolean;
  user: {};
  handleLogin: (user: IUserLogin) => Promise<void>;
  handleRegister: (user: IUserRegister) => Promise<IResponse>;
}

const useAuth = create<IAuthState>((set, get) => ({
  isLogged: false,
  user: {},
  handleLogin: async (user: IUserLogin) => {
    const userInfo = await login(user);
    set(userInfo);
  },
  handleRegister: async (user: IUserRegister) => await register(user),
}));

const login = async (user: IUserLogin): Promise<Partial<IAuthState>> => {
  try {
    const http = getAxiosInstance();
    const { data } = await http.post("/auth/login", user);
    return {
      isLogged: true,
      user: data.user,
    };
  } catch (error) {
    notifError(error?.response?.data?.error);
    return {
      isLogged: false,
      user: {},
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

function logout() {}

export default useAuth;
