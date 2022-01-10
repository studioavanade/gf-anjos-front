import { UserCredential } from "firebase/auth";
import * as AuthService from "../../services/firebase-auth";
import { AuthTypes } from "./types";
import { showErrorToast } from "./../../utils/toast/index";
import ROUTING_PATHS from "./../../routes/paths/index";
import { NavigateFunction } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { getMessageFromError } from "../../utils/firebase";
import { setSessionStorage } from "./../../utils/storage/index";
import { USER_EMAIL_STORAGE_KEY } from "../../constants";

const authRequest = () => ({
  type: AuthTypes.AUTH_REQUEST,
});

export const signIn =
  (
    email: string,
    password: string,
    navigate: NavigateFunction | null = null,
    destinationRoute: string = ""
  ) =>
  (dispatch: any) => {
    dispatch(authRequest());
    AuthService.signIn(email, password)
      .then(() => {
        dispatch(signInSuccess(email));
        if (navigate && destinationRoute.length > 0) {
          navigate(destinationRoute);
        }
      })
      .catch((error) => {
        const errorMessageTranslated = getMessageFromError(error);
        dispatch(signInError(errorMessageTranslated));
        showErrorToast(errorMessageTranslated);
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
  (email: string, password: string, navigate: NavigateFunction | null = null) =>
  (dispatch: any) => {
    dispatch(authRequest());
    AuthService.createUser(email, password)
      .then((_) => {
        dispatch(signIn(email, password));
        setSessionStorage(USER_EMAIL_STORAGE_KEY, email);
        if (navigate) {
          navigate(ROUTING_PATHS.PersonalInformations);
        }
      })
      .catch((error: FirebaseError) => {
        const errorMessageTranslated = getMessageFromError(error);
        showErrorToast(errorMessageTranslated);
        dispatch(createUserError(errorMessageTranslated));
      });
  };

const createUserError = (error: any) => ({
  payload: error,
  type: AuthTypes.CREATE_USER_ERROR,
});
