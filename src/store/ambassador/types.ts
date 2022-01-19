import { PersonType } from "../shared";

export enum AmbassadorActionTypes {
  CREATE_AMBASSADOR_SUCCESS = "@ambassador/CREATE_AMBASSADOR_SUCCESS",
  CREATE_AMBASSADOR_ERROR = "@ambassador/CREATE_AMBASSADOR_ERROR",
  SET_AMBASSADOR_EMAIL = "@ambassador/SET_AMBASSADOR_EMAIL",

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
}
