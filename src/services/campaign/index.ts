import axios, { AxiosInstance, AxiosResponse } from "axios";

import apis from "../../constants/apis";
import { ICampaign } from "../../store/campaign/types";

interface IApi {
  backend: AxiosInstance;
  createCampaign(
    image: any,
    ambassadorId: string,
    targetDonators: number
  ): Promise<AxiosResponse>;

  getCampaign(ambassador: ICampaign): Promise<AxiosResponse>;
  updateCampaign(ambassador: ICampaign): Promise<AxiosResponse>;

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
      targetDonators: number
    ): Promise<AxiosResponse> => {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("ambassadorId", ambassadorId);
      formData.append("targetDonators", targetDonators.toString());

      return backend.post(`/campaign`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },

    getCampaign: (ambassador: ICampaign): Promise<AxiosResponse> => {
      return backend.get(`/`,  );
    },

    updateCampaign: (ambassador: ICampaign): Promise<AxiosResponse> => {
      return backend.put(`/`, )
    },
  };
};

export default api;
