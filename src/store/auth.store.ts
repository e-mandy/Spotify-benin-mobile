import { IUserLogin } from "@/src/interfaces/user-login.interface";
import { create } from "zustand";

interface IAuthState {
  isLogged: boolean;
  user: {};
  login: (user: IUserLogin) => void;
}

const useAuth = create<IAuthState>((set) => ({
  isLogged: false,
  user: {},
  login: (user: IUserLogin) => set((state) => login(user, state)),
}));

const login = (user: IUserLogin, state) => void function register() {};
function logout() {}

export default useAuth;
