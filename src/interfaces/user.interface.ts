interface User {
  email: string;
  username: string;
  emailVerified: boolean;
  ethnicity?: string;
  birthday?: string;
  photo?: string;
  createdAt?: string;
}

export type IUser = Partial<User>;
