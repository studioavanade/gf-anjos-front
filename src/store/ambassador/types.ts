import { PersonType } from "../shared";

export enum AmbassadorActionTypes {
  CREATE_AMBASSADOR_SUCCESS = "@ambassador/CREATE_AMBASSADOR_SUCCESS",
  CREATE_AMBASSADOR_ERROR = "@ambassador/CREATE_AMBASSADOR_ERROR",
  SET_AMBASSADOR_EMAIL = "@ambassador/SET_AMBASSADOR_EMAIL",

  GET_AMBASSADOR = "@ambassador/GET_AMBASSADOR",
  GET_AMBASSADOR_ERROR = "@ambassador/GET_AMBASSADOR_ERROR",

  UPDATE_AMBASSADOR = "@ambassador/UPDATE_AMBASSADOR",
  UPDATE_AMBASSADOR_ERROR = "@ambassador/UPDATE_AMBASSADOR_ERROR",

  CREATE_CAMPAIGN_SUCCESS = "@ambassador/CREATE_CAMPAIGN_SUCCESS",
  CREATE_CAMPAIGN_ERROR = "@ambassador/CREATE_CAMPAIGN_ERROR",
  
}

export interface IAmbassador {
  id?: string;
  email?: string;
  name?: string;
  lastName?: string;
  cpfCnpj?: string;
  birthDate?: Date;
  education?: string;
  profession?: string;
  phone?: string;
  celPhone?: string;
  personType?: PersonType;
  currentCampaignId?: string;
}

export interface IAmbassadorStates {
  error?: any;
  loading: boolean;
  ambassador?: IAmbassador;
  ambassadorEdit?: IAmbassador;
}
