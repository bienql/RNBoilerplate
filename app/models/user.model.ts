export interface Credentials {
  userNameOrEmailAddress: string;
  password: string;
  Rememberclient: boolean;
}

export interface User {
  id: string;
  userName: string;
  token: string;
}
