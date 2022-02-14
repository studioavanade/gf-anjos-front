import { AmbassadorActionTypes, IAmbassadorStates } from "./types";

const initialState: IAmbassadorStates = {
  isEditting: false,
};

const ambassadorReducer = (
  state: IAmbassadorStates = initialState,
  action: any
): IAmbassadorStates => {
  switch (action.type) {
    case AmbassadorActionTypes.CREATE_AMBASSADOR_SUCCESS:
      return {
        ...state,
        ambassador: { ...action.payload },
      };
    case AmbassadorActionTypes.CREATE_AMBASSADOR_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case AmbassadorActionTypes.SET_AMBASSADOR_EMAIL:
      return {
        ...state,
        ambassador: {
          ...state.ambassador,
          email: action.payload,
        },
      };

    case AmbassadorActionTypes.GET_AMBASSADOR:
      return {
        ...state,
        ambassador: { ...action.payload },
      };

    case AmbassadorActionTypes.GET_AMBASSADOR_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case AmbassadorActionTypes.CLEAR_STATE:
      return {
        ...state,
        error: undefined,
        ambassador: undefined,
      };

    case AmbassadorActionTypes.SET_AMBASSADOR_EDITTING:
      return {
        ...state,
        isEditting: action.payload,
      };

    case AmbassadorActionTypes.SAVE_AMBASSADOR_EMAIL:
      return {
        ...state,
        ambassador: {
          ...state.ambassador,
          email: action.payload,
        },
      };

    default:
      return state;
  }
};

export default ambassadorReducer;
