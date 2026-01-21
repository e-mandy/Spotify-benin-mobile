interface User {
  email: string;
  username: string;
  emailVerifiedAt: boolean;
  ethnicity?: string;
  birthday?: Date;
  photo?: string;
}

export type IUser = Partial<User>;
