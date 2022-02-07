import axios, { AxiosInstance, AxiosResponse } from "axios";

import apis from "../../constants/apis";
import { ICampaign } from "../../store/campaign/types";

interface IApi {
  backend: AxiosInstance;
  getCampaign(campaignId: string | number): Promise<AxiosResponse>;
  createCampaign(
    image: any,
    ambassadorId: string,
    targetDonators: number,
    isActive: boolean
  ): Promise<AxiosResponse>;
  updateCampaign(campaign: ICampaign): Promise<AxiosResponse>;
}

const api = (): IApi => {
  const backend = axios.create({
    baseURL: apis.backend,
  });

  return {
    backend,

    getCampaign: (campaignId: string | number): Promise<AxiosResponse> => {
      return backend.get(`/campaigns/${campaignId}`);
    },

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

    updateCampaign: (campaign: ICampaign): Promise<AxiosResponse> => {
      const formData = new FormData();
      formData.append("image", campaign.pictureUrl);
      formData.append("ambassadorId", campaign.ambassadorId || "");
      formData.append(
        "targetDonators",
        campaign.targetDonators?.toString() || ""
      );
      formData.append("isActive", campaign.isActive?.toString() || "");

      return backend.put(`/campaigns/${campaign.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
  };
};

export default api;
