import axios, { AxiosInstance, AxiosResponse } from "axios";

import apis from "../../constants/apis";

interface IApi {
  backend: AxiosInstance;
  createCampaign(
    image: any,
    ambassadorId: string,
    targetDonators: number
  ): Promise<AxiosResponse>;
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
  };
};

export default api;
