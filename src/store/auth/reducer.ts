import { IAction } from "..";
import { AuthTypes, IAuthState } from "./types";

const initialState: IAuthState = {
  createUserError: undefined,
  signInError: undefined,
  loading: false,
  user: undefined,
};

const authReducer = (state = initialState, action: IAction): IAuthState => {
  switch (action.type) {
    case AuthTypes.AUTH_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case AuthTypes.CREATE_USER_ERROR:
      return {
        ...initialState,
        createUserError: action.payload,
      };

    case AuthTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        signInError: initialState.signInError,
        loading: false,
      };
    case AuthTypes.SIGNIN_ERROR:
      return {
        ...initialState,
        signInError: action.payload,
      };
    default:
      return { ...initialState };
  }
};

export default authReducer;
