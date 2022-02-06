import CampaignService from "../../services/campaign";
import { CampaignTypes, ICampaign } from "../campaign/types";
import { AxiosResponse } from "axios";

export const createCampaign =
  (
    image: File,
    ambassadorId: string,
    targetDonators: number,
    onSuccessCallback: any = null,
    isActive: boolean = true
  ) =>
  (dispatch: any) => {
    CampaignService()
      .createCampaign(image, ambassadorId, targetDonators, isActive)
      .then(() => {
        dispatch(
          createCampaignSuccess({ image, ambassadorId, targetDonators })
        );
        if (onSuccessCallback) onSuccessCallback();
      })
      .catch((error) => dispatch(createCampaignError(error.message)));
  };

const createCampaignSuccess = (ambassador: ICampaign) => ({
  payload: ambassador,
  type: CampaignTypes.CREATE_CAMPAIGN_SUCCESS,
});

const createCampaignError = (error: any) => ({
  payload: error,
  type: CampaignTypes.CREATE_CAMPAIGN_ERROR,
});

export const saveFormTargetDonators =
  (targetDonators: number) => (dispatch: any) => {
    dispatch(saveTargetDonators(targetDonators));
  };

const saveTargetDonators = (targetDonators: number) => ({
  payload: targetDonators,
  type: CampaignTypes.SAVE_TARGET_DONATORS,
});

export const getCampaign = (campaignId: string) => (dispatch: any) => {
  CampaignService()
    .getCampaign(campaignId)
    .then((res: AxiosResponse) => {
      dispatch(getCampaignSuccess(res.data));
    })
    .catch((error) => dispatch(getCampaignError(error.message)));
};

const getCampaignSuccess = (ambassador: ICampaign) => ({
  payload: ambassador,
  type: CampaignTypes.GET_CAMPAIGN_SUCCESS,
});

const getCampaignError = (error: any) => ({
  payload: error,
  type: CampaignTypes.GET_CAMPAIGN_ERROR,
});

export const setAmbassadorIdIntoCampaign =
  (ambassadorId: string) => (dispatch: any) => {
    dispatch(setAmbassadorIdIntoCampaignSuccess(ambassadorId));
  };

const setAmbassadorIdIntoCampaignSuccess = (ambassadorId: string) => ({
  payload: ambassadorId,
  type: CampaignTypes.SET_AMBASSADOR_ID_INTO_CAMPAIGN_SUCCESS,
});

export const clearCampaignState = () => ({
  type: CampaignTypes.CLEAR_STATE,
});
