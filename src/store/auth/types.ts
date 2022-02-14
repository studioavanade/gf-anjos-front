export enum AuthTypes {
  SIGNIN_SUCCESS = "@auth/SIGNIN_SUCCESS",
  SIGNIN_ERROR = "@auth/SIGNIN_ERROR",
  SIGNOUT = "@auth/SIGNOUT",
  CREATE_USER_ERROR = "@auth/CREATE_USER_ERROR",
}

export interface IAuthStates {
  createUserError?: any;
  signInError?: any;
  loading: boolean;
  userEmail?: any;
}
