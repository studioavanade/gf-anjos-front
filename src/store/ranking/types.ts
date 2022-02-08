import { PersonType } from "../shared";

export enum RankingTypes {
  GET_RANKING_SUCCESS = "@ranking/GET_RANKING_SUCCESS",
  GET_RANKING_ERROR = "@ranking/GET_RANKING_ERROR",
}

export interface IRankingAmbassador {
  currentCampaign: {
    id: number;
    isActive: boolean;
  };
  isActive: boolean;
  id: number;
  lastName: string;
  name: string;
  personType: PersonType;
  total: number;
}

export interface IRankingStates {
  error?: any;
  naturalAmbassadors?: IRankingAmbassador[];
  legalAmbassadors?: IRankingAmbassador[];
}
