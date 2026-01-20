export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  email: string;
  password: string;
  username: string;
  ethnicity?: string;
  birthday?: string;
}

export interface IUserProfile extends Omit<IUserRegister, "password"> {
  accessToken: string;
  emailVerfiedAt?: Date;
  photo?: string;
}

export interface IResponse {
  success: boolean;
  message?: string;
  data?: any;
}
