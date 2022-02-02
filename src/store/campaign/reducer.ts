import { CampaignTypes, ICampaignStates } from "./types";

const initialState: ICampaignStates = {
  loading: false,
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
        loading: false,
      };

    case CampaignTypes.CREATE_CAMPAIGN_SUCCESS:
      return {
        campaign: {
          targetDonators: action.payload.targetDonators,
          ambassadorId: action.payload.ambassadorId,
          image: action.payload.image,
        },
        loading: false,
        error: undefined,
      };

    case CampaignTypes.CREATE_CAMPAIGN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CampaignTypes.GET_CAMPAIGN_SUCCESS:
      return {
        campaign: {
          targetDonators: action.payload.targetDonators,
          ambassadorId: action.payload.ambassadorId,
          image: action.payload.image,
        },
        loading: false,
        error: undefined,
      };

    case CampaignTypes.GET_CAMPAIGN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CampaignTypes.GET_CAMPAIGN:
      return {
        ...state,
        campaignEdit: action.payload,
        loading: false,
      };

    case CampaignTypes.SET_AMBASSADOR_ID_INTO_CAMPAIGN_SUCCESS:
      return {
        ...state,
        campaign: {
          ...state.campaign,
          ambassadorId: action.payload,
        },
        loading: false,
      };

    case CampaignTypes.CLEAR_STATE:
      return {
        error: undefined,
        campaign: undefined,
        campaignEdit: undefined,
        loading: false,
      };

    default:
      return state;
  }
};

export default campaignReducer;
