import axios, { AxiosInstance, AxiosResponse } from "axios";

import apis from "../../constants/apis";
import { ICampaign } from "../../store/campaign/types";

interface IApi {
  backend: AxiosInstance;
  createCampaign(
    image: any,
    ambassadorId: string,
    targetDonators: number,
    isActive: boolean
  ): Promise<AxiosResponse>;
  getCampaign(campaignId: string): Promise<AxiosResponse>;
  updateCampaign(campaign: ICampaign): Promise<AxiosResponse>;
}

const api = (): IApi => {
  const backend = axios.create({
    baseURL: apis.backend,
  });

  return {
    backend,

    createCampaign: (
      image: any,
      ambassadorId: string,
      targetDonators: number,
      isActive: boolean
    ): Promise<AxiosResponse> => {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("ambassadorId", ambassadorId);
      formData.append("targetDonators", targetDonators.toString());
      formData.append("isActive", isActive.toString());

      return backend.post(`/campaigns`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },

    getCampaign: (campaignId: string): Promise<AxiosResponse> => {
      return backend.get(`/campaigns?id=${campaignId}`);
    },

    updateCampaign: (campaign: ICampaign): Promise<AxiosResponse> => {
      return backend.put(`/campaigns`);
    },
  };
};

export default api;
