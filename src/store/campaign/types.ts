export enum CampaignTypes {
  CREATE_CAMPAIGN_SUCCESS = "@campaign/CREATE_CAMPAIGN_SUCCESS",
  CREATE_CAMPAIGN_ERROR = "@campaign/CREATE_CAMPAIGN_ERROR",
  SAVE_TARGET_DONATORS = "@campaign/SAVE_TARGET_DONATORS",
  GET_CAMPAIGN_SUCCESS = "@campaign/GET_CAMPAIGN_SUCCESS",
  GET_CAMPAIGN_ERROR = "@campaign/GET_CAMPAIGN_ERROR",
}

export interface ICampaign {
  ambassadorId?: string;
  image?: any;
  targetDonators: number;
}

export interface ICampaignStates {
  loading?: boolean;
  error?: any;
  campaign?: ICampaign;
}
