import { IAction } from "..";
import { AuthTypes, IAuthStates } from "./types";

const initialState: IAuthStates = {
  createUserError: undefined,
  signInError: undefined,
  loading: false,
  userEmail: undefined,
};

const authReducer = (state = initialState, action: IAction): IAuthStates => {
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
        userEmail: action.payload,
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
