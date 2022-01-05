import { Education, IAddress, PersonType } from "../shared";

export enum AmbassadorActionTypes {
  REGISTER_PERSONAL_INFO_SUCCESS = "@ambassador/REGISTER_PERSONAL_INFO_SUCCESS",
  REGISTER_PERSONAL_INFO_ERROR = "@ambassador/REGISTER_PERSONAL_INFO_ERROR",

  UPDATE_PERSONAL_INFO_SUCCESS = "@ambassador/UPDATE_PERSONAL_INFO_SUCCESS",
  UPDATE_PERSONAL_INFO_ERROR = "@ambassador/UPDATE_PERSONAL_INFO_ERROR",

  CREATE_CAMPAIGN_SUCCESS = "@ambassador/CREATE_CAMPAIGN_SUCCESS",
  CREATE_CAMPAIGN_ERROR = "@ambassador/CREATE_CAMPAIGN_ERROR",

  UDDATE_CAMPAIGN_SUCCESS = "@ambassador/UDDATE_CAMPAIGN_SUCCESS",
  UDDATE_CAMPAIGN_ERROR = "@ambassador/UDDATE_CAMPAIGN_ERROR",
}

export interface IAmbassador {
  id?: number;
  email: string;
  name: string;
  lastName: string;
  cpfCnpj: string;
  birthDate: Date;
  education: Education;
  profession: string;
  phone: string;
  celPhone: string;
  personType: PersonType;
}

export interface IAmbassadorStates {
  error?: any;
  loading: boolean;
  ambassador?: IAmbassador;
}
