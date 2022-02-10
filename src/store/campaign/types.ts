import { IAmbassador } from "../ambassador/types";

export enum CampaignTypes {
  CREATE_CAMPAIGN_SUCCESS = "@campaign/CREATE_CAMPAIGN_SUCCESS",
  CREATE_CAMPAIGN_ERROR = "@campaign/CREATE_CAMPAIGN_ERROR",
  UPDATE_CAMPAIGN_SUCCESS = "@campaign/UPDATE_CAMPAIGN_SUCCESS",
  UPDATE_CAMPAIGN_ERROR = "@campaign/UPDATE_CAMPAIGN_ERROR",
  SAVE_TARGET_DONATORS = "@campaign/SAVE_TARGET_DONATORS",
  GET_CAMPAIGN_SUCCESS = "@campaign/GET_CAMPAIGN_SUCCESS",
  GET_CAMPAIGN_ERROR = "@campaign/GET_CAMPAIGN_ERROR",
  SET_AMBASSADOR_ID_INTO_CAMPAIGN_SUCCESS = "@campaign/SET_AMBASSADOR_ID_INTO_CAMPAIGN_SUCCESS",
  CLEAR_STATE = "@campaign/CLEAR_STATE",
}

export interface ICampaign {
  id?: number;
  ambassadorId?: string;
  ambassador?: IAmbassador;
  pictureUrl?: any;
  targetDonators?: number;
  numberOfDonators?: number;
  monthlyDonationsValue?: number;
  isActive?: boolean;
}

export interface ICampaignStates {
  error?: any;
  campaign?: ICampaign;
}
