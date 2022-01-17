import { UserCredential } from "firebase/auth";
import * as AuthService from "../../services/firebase-auth";
import { AuthTypes } from "./types";
import { showErrorToast } from "./../../utils/toast/index";
import { FirebaseError } from "firebase/app";
import { getMessageFromError } from "../../utils/firebase";
import { setSessionStorage } from "./../../utils/storage/index";
import { USER_EMAIL_STORAGE_KEY } from "../../constants";
import { clearLoading } from "./../loading-progress/actions";

const authRequest = () => ({
  type: AuthTypes.AUTH_REQUEST,
});

export const signIn =
  (
    email: string,
    password: string,
    onSuccessCallback: any | null = null,
    onErrorCallback: any | null = null
  ) =>
  (dispatch: any) => {
    dispatch(authRequest());
    AuthService.signIn(email, password)
      .then(() => {
        if (onSuccessCallback) onSuccessCallback();
        setSessionStorage(USER_EMAIL_STORAGE_KEY, email);
        dispatch(signInSuccess(email));
      })
      .catch((error) => {
        if (onErrorCallback) onErrorCallback();
        const errorMessageTranslated = getMessageFromError(error);
        dispatch(signInError(errorMessageTranslated));
        showErrorToast(errorMessageTranslated);
      })
      .finally(() => {
        dispatch(clearLoading());
      });
  };

export const saveUserEmail = (email: string) => (dispatch: any) => {
  dispatch(signInSuccess(email));
};

export const signInSuccess = (userEmail: string) => ({
  payload: userEmail,
  type: AuthTypes.SIGNIN_SUCCESS,
});

const signInError = (error: any) => ({
  payload: error,
  type: AuthTypes.SIGNIN_ERROR,
});

export const createUser =
  (
    email: string,
    password: string,
    onSuccessCallback: any | null = null,
    onErrorCallback: any | null = null
  ) =>
  (dispatch: any) => {
    dispatch(authRequest());
    AuthService.createUser(email, password)
      .then((_) => {
        if (onSuccessCallback) onSuccessCallback();
      })
      .catch((error: FirebaseError) => {
        if (onErrorCallback) onErrorCallback();
        const errorMessageTranslated = getMessageFromError(error);
        showErrorToast(errorMessageTranslated);
        dispatch(createUserError(errorMessageTranslated));
      })
      .finally(() => {
        dispatch(clearLoading());
      });
  };

const createUserError = (error: any) => ({
  payload: error,
  type: AuthTypes.CREATE_USER_ERROR,
});

export const signOut = () => ({
  type: AuthTypes.SIGNOUT,
});
