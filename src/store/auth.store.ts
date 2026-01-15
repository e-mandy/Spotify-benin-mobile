import { IUserLogin } from '@/src/interfaces/user-login.interface';
import { create } from 'zustand';

const useAuth = create((set) => ({
  isLogged: false,
  user:{},
  login: (user:IUserLogin) => set((state)=> login(user, state)),
}));

function login(user:IUserLogin, state){}

function register(){}
function logout(){}

export default useAuth;