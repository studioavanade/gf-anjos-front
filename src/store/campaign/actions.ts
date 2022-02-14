import CampaignService from "../../services/campaign";
import { CampaignTypes, ICampaign } from "../campaign/types";
import { AxiosResponse } from "axios";

export const createCampaign =
  (
    image: File,
    ambassadorId: string,
    targetDonators: number,
    isActive: boolean = true,
    onSuccessCallback: any = null,
    onErrorCallback: any = null,
    onFinishCallback: any = null
  ) =>
  (dispatch: any) => {
    CampaignService()
      .createCampaign(image, ambassadorId, targetDonators, isActive)
      .then((res: AxiosResponse) => {
        const campaignCreated: ICampaign = res.data;
        dispatch(createCampaignSuccess(campaignCreated));
        if (onSuccessCallback) onSuccessCallback();
      })
      .catch((error) => {
        dispatch(createCampaignError(error.message));
        if (onErrorCallback) onErrorCallback();
      })
      .finally(() => {
        if (onFinishCallback) onFinishCallback();
      });
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

export const getCampaign =
  (
    campaignId: number | string,
    onSuccessCallback: any = null,
    onErrorCallback: any = null,
    onFinishCallback: any = null
  ) =>
  (dispatch: any) => {
    CampaignService()
      .getCampaign(campaignId)
      .then((res: AxiosResponse) => {
        const campaign = {
          ...res.data.campaign,
          ambassador: res.data.ambassador,
        };
        dispatch(getCampaignSuccess(campaign));
        if (onSuccessCallback) onSuccessCallback();
      })
      .catch((error) => {
        dispatch(getCampaignError(error.message));
        if (onErrorCallback) onErrorCallback();
      })
      .finally(() => {
        if (onFinishCallback) onFinishCallback();
      });
  };

export const getCampaignSuccess = (campaign: ICampaign) => ({
  payload: campaign,
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

export const updateCampaign =
  (
    campaign: any,
    onSuccessCallback: any = null,
    onErrorCallback: any = null,
    onFinishCallback: any = null
  ) =>
  (dispatch: any) => {
    CampaignService()
      .updateCampaign(campaign)
      .then((res: AxiosResponse) => {
        const campaignUpdated: ICampaign = res.data;
        dispatch(updateCampaignSuccess(campaignUpdated));
        if (onSuccessCallback) onSuccessCallback();
      })
      .catch((error) => {
        if (onErrorCallback) onErrorCallback();
        dispatch(updateCampaignError(error.message));
      })
      .finally(() => {
        if (onFinishCallback) onFinishCallback();
      });
  };

const updateCampaignSuccess = (ambassador: ICampaign) => ({
  payload: ambassador,
  type: CampaignTypes.UPDATE_CAMPAIGN_SUCCESS,
});

const updateCampaignError = (error: any) => ({
  payload: error,
  type: CampaignTypes.UPDATE_CAMPAIGN_ERROR,
});
