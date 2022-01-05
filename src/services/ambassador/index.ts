import axios, { AxiosInstance, AxiosResponse } from "axios";

import apis from "../../constants/apis";
import { IAmbassador } from "../../store/amabassador/types";

interface IApi {
  backend: AxiosInstance;
  createAmbassador(ambassador: IAmbassador): Promise<AxiosResponse>;
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

    createAmbassador: (ambassador: IAmbassador): Promise<AxiosResponse> => {
      return backend.post(`/ambassadors`, ambassador);
    },
  };
};

export default api;
