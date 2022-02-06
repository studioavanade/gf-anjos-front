import { IRankingStates, RankingTypes } from "./types";

const initialState: IRankingStates = {
  error: undefined,
  naturalPerson: [],
  legalPerson: [],
};

const paymentReducer = (
  state: IRankingStates = initialState,
  action: any
): IRankingStates => {
  switch (action.type) {
    case RankingTypes.GET_RANKING_SUCCESS:
      return {
        ...state,
        naturalPerson: action.payload.naturalPerson,
        legalPerson: action.payload.legalPerson,
      };
    case RankingTypes.GET_RANKING_ERROR:
      return {
        ...state,
        naturalPerson: initialState.naturalPerson,
        legalPerson: initialState.legalPerson,
      };

    default:
      return state;
  }
};

export default paymentReducer;
