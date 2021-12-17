import { AmbassadorActionTypes, IAmbassadorStates } from "./types";

const initialState: IAmbassadorStates = {
  loading: false,
};

const ambassadorReducer = (
  state: IAmbassadorStates = initialState,
  action: any
): IAmbassadorStates => {
  switch (action.type) {
    case AmbassadorActionTypes.CREATE_CAMPAIGN_SUCCESS:
      return {
        ambassador: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default ambassadorReducer;
