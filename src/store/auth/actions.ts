import { UserCredential } from "firebase/auth";
import { toast } from "react-toastify";
import { FAIL_LOGIN, FAIL_SIGN_UP } from "../../constants/feedback-messages";
import * as AuthService from "../../services/firebase-auth";
import { AuthTypes } from "./types";

const authRequest = () => ({
  type: AuthTypes.AUTH_REQUEST,
});

export const signIn = (email: string, password: string) => (dispatch: any) => {
  dispatch(authRequest());
  AuthService.signIn(email, password)
    .then((userCredential: UserCredential) => {
      dispatch(signInSuccess(userCredential));
    })
    .catch((error) => {
      const errorCode = error.code;
      toast.error(`${errorCode} - ${FAIL_LOGIN}`);
      dispatch(signInError(errorCode));
    });
};

const signInSuccess = (user: UserCredential) => ({
  payload: user,
  type: AuthTypes.SIGNIN_SUCCESS,
});

const signInError = (error: any) => ({
  payload: error,
  type: AuthTypes.SIGNIN_ERROR,
});

export const createUser =
  (email: string, password: string) => (dispatch: any) => {
    dispatch(authRequest());
    AuthService.createUser(email, password)
      .then((_) => {
        dispatch(signIn(email, password));
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(`${errorCode} - ${FAIL_SIGN_UP}`);
        dispatch(createUserError(errorCode));
      });
  };

const createUserError = (error: any) => ({
  payload: error,
  type: AuthTypes.CREATE_USER_ERROR,
});
