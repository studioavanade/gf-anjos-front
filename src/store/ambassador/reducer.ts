import { AmbassadorActionTypes, IAmbassadorStates } from "./types";

const initialState: IAmbassadorStates = {
  loading: false,
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
        loading: false,
      };
    case AmbassadorActionTypes.CREATE_AMBASSADOR_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case AmbassadorActionTypes.SET_AMBASSADOR_EMAIL:
      return {
        ...state,
        loading: false,
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