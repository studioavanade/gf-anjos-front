import { UserCredential } from "firebase/auth";
import { toast } from "react-toastify";
import { FAIL_LOGIN, FAIL_SIGN_UP } from "../../constants/feedback-messages";
import * as AuthService from "../../services/firebase-auth";
import { AuthTypes } from "./types";

export const signIn = (email: string, password: string) => (dispatch: any) => {
  AuthService.signIn(email, password)
    .then((userCredential: UserCredential) => {
      dispatch(signInSuccess(userCredential));
    })
    .catch((error) => {
      const errorCode = error.code;
      toast.error(`${errorCode} - ${FAIL_LOGIN}`);
    });
};

export const signInSuccess = (user: UserCredential) => ({
  payload: user,
  type: AuthTypes.SIGNUP_UP,
});

export const createUser = (email: string, password: string) => {
  AuthService.createUser(email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      toast.error(`${errorCode} - ${FAIL_SIGN_UP}`);
    });
};
