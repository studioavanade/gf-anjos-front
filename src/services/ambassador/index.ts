import axios, { AxiosInstance, AxiosResponse } from "axios";

import apis from "../../constants/apis";
import { IAmbassador } from "../../store/ambassador/types";

interface IApi {
  backend: AxiosInstance;
  createAmbassador(ambassador: IAmbassador): Promise<AxiosResponse>;
  getAmbassador(ambassador: IAmbassador): Promise<AxiosResponse>;
  updateAmbassador(ambassador: IAmbassador): Promise<AxiosResponse>;
}

const api = (): IApi => {
  console.log("url: ", apis.backend);
  const backend = axios.create({
    baseURL: apis.backend,
  });

  return {
    backend,

    createAmbassador: (ambassador: IAmbassador): Promise<AxiosResponse> => {
      return backend.post(`/ambassadors`, ambassador);
    },

    getAmbassador: (ambassador: IAmbassador): Promise<AxiosResponse> => {
      return backend.get(`/ambassadors/all`);
    },

    updateAmbassador: (ambassador: IAmbassador): Promise<AxiosResponse> => {
      return backend.put(`/ambassadors/1`, ambassador);
    },
  };
};

export default api;
