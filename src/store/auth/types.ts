export enum AuthTypes {
  SIGNUP_UP = "@auth/CREATE_AUTH",
}

export interface IAuthState {
  error?: any;
  loading: boolean;
  userAuthenticated?: any;
}
