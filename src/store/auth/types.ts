export enum AuthTypes {
  AUTH_REQUEST = "@auth/AUTH_REQUEST",
  SIGNIN_SUCCESS = "@auth/SIGNIN_SUCCESS",
  SIGNIN_ERROR = "@auth/SIGNIN_ERROR",
  CREATE_USER_ERROR = "@auth/CREATE_USER_ERROR",
}

export interface IAuthState {
  createUserError?: any;
  signInError?: any;
  loading: boolean;
  user?: any;
}
