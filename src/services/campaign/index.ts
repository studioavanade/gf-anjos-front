import axios, { AxiosInstance, AxiosResponse } from "axios";

import apis from "../../constants/apis";

interface IApi {
  backend: AxiosInstance;
  createCampaign(
    image: any,
    ambassadorId: string,
    targetDonators: number
  ): Promise<AxiosResponse>;
  getCampaign(campaignId: string): Promise<AxiosResponse>;
}

const api = (): IApi => {
  const backend = axios.create({
    baseURL: apis.backend,
  });

  // backend.interceptors.request.use(
  //   async (request: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  //     request.headers.Authorization = `Bearer ${
  //       store.getState().auth.token
  //     }`;
  //     return request;
  //   }
  // );

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

    getCampaign: (campaignId: string): Promise<AxiosResponse> => {
      return backend.get(`/campaign?campaignId=${campaignId}`);
    },
  };
};

export default api;
