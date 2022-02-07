import { CampaignTypes, ICampaignStates } from "./types";

const initialState: ICampaignStates = {
  error: undefined,
  campaign: undefined,
};

const campaignReducer = (
  state: ICampaignStates = initialState,
  action: any
): ICampaignStates => {
  switch (action.type) {
    case CampaignTypes.SAVE_TARGET_DONATORS:
      return {
        campaign: {
          targetDonators: action.payload,
        },
      };

    case CampaignTypes.UPDATE_CAMPAIGN_SUCCESS:
    case CampaignTypes.CREATE_CAMPAIGN_SUCCESS:
      return {
        campaign: {
          ...action.payload,
        },
        error: undefined,
      };

    case CampaignTypes.UPDATE_CAMPAIGN_ERROR:
    case CampaignTypes.CREATE_CAMPAIGN_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case CampaignTypes.GET_CAMPAIGN_SUCCESS:
      return {
        campaign: {
          ...action.payload,
        },
        error: undefined,
      };

    case CampaignTypes.GET_CAMPAIGN_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case CampaignTypes.SET_AMBASSADOR_ID_INTO_CAMPAIGN_SUCCESS:
      return {
        ...state,
        campaign: {
          ...state.campaign,
          ambassadorId: action.payload,
        },
      };

    case CampaignTypes.CLEAR_STATE:
      return {
        error: undefined,
        campaign: undefined,
      };

    default:
      return state;
  }
};

export default campaignReducer;
