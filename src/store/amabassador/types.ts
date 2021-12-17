import { IAddress } from "../shared";
import { ICampaign } from "./../campaign/types";

export enum AmbassadorActionTypes {
  CREATE_ACCOUNT_SUCCESS = "@register/CREATE_ACCOUNT_SUCCESS",
  CREATE_ACCOUNT_ERROR = "@register/CREATE_ACCOUNT_ERROR",

  UPDATE_ACCOUNT_SUCCESS = "@register/UPDATE_ACCOUNT_SUCCESS",
  UPDATE_ACCOUNT_ERROR = "@register/UPDATE_ACCOUNT_ERROR",

  CREATE_CAMPAIGN_SUCCESS = "@register/CREATE_CAMPAIGN_SUCCESS",
  CREATE_CAMPAIGN_ERROR = "@register/CREATE_CAMPAIGN_ERROR",
}

export interface IAmbassador {
  email: string;
  name: string;
  lastName: string;
  birthDate: Date;
  education: Education;
  profession: string;
  phone: string;
  celPhone: string;
  address: IAddress;
  personType: PersonType;
  campaigns: ICampaign[];
}

export enum Education {
  FUNDAMENTAL = 0,
  HIGH_SCHOOL = 1,
  GRADUATION_COMPLETE = 2,
  GRADUATION_INCOMPLETE = 3,
  POST_GRADUATION = 4,
}

export enum PersonType {
  NATURAL_PERSON = 0,
  LEGAL_PERSON = 1,
}

export interface IAmbassadorStates {
  error?: any;
  loading: boolean;
  ambassador?: IAmbassador;
}
