import axios, { AxiosInstance, AxiosResponse } from "axios";

import apis from "../../constants/apis";

interface IApi {
  backend: AxiosInstance;
  getRanking(): Promise<AxiosResponse>;
}

const api = (): IApi => {
  const backend = axios.create({
    baseURL: apis.backend,
  });

  return {
    backend,

    getRanking: (): Promise<AxiosResponse> => {
      return backend.get(`/ranking/ambassadors`);
    },
  };
};

export default api;
