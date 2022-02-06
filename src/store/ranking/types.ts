export enum RankingTypes {
  GET_RANKING_SUCCESS = "@ranking/GET_RANKING_SUCCESS",
  GET_RANKING_ERROR = "@ranking/GET_RANKING_ERROR",
}

export interface IRankingStates {
  error?: any;
  naturalPerson?: any[];
  legalPerson?: any[];
}
