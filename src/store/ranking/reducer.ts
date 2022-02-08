import { IRankingStates, RankingTypes } from "./types";

const initialState: IRankingStates = {
  error: undefined,
  naturalAmbassadors: [],
  legalAmbassadors: [],
};

const paymentReducer = (
  state: IRankingStates = initialState,
  action: any
): IRankingStates => {
  switch (action.type) {
    case RankingTypes.GET_RANKING_SUCCESS:
      return {
        ...state,
        naturalAmbassadors: action.payload.naturalAmbassadors,
        legalAmbassadors: action.payload.legalAmbassadors,
      };
    case RankingTypes.GET_RANKING_ERROR:
      return {
        ...state,
        naturalAmbassadors: initialState.naturalAmbassadors,
        legalAmbassadors: initialState.legalAmbassadors,
      };

    default:
      return state;
  }
};

export default paymentReducer;
