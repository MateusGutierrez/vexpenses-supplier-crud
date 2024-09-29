export interface User {
  email: string;
  name: string;
  password: string;
  _id: string | number;
  __v: number;
}
export interface LoggedUser {
  user: User;
  token: string;
}
export interface Store {
  loggedUser: LoggedUser | null;
  token: string | null;
  setAuthToken: (token: string) => void;
  saveUser: (user: LoggedUser) => void;
  logout: () => void;
}
