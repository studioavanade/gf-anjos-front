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

    default:
      return state;
  }
};

export default campaignReducer;
