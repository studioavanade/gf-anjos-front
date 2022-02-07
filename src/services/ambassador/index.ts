import axios, { AxiosInstance, AxiosResponse } from "axios";

import apis from "../../constants/apis";
import { IAmbassador } from "../../store/ambassador/types";

interface IApi {
  backend: AxiosInstance;
  getAmbassador(cpfCnpj?: string, email?: string): Promise<AxiosResponse>;
  createAmbassador(ambassador: IAmbassador): Promise<AxiosResponse>;
  updateAmbassador(ambassador: IAmbassador): Promise<AxiosResponse>;
}

const api = (): IApi => {
  const backend = axios.create({
    baseURL: apis.backend,
  });

  return {
    backend,

    getAmbassador: (
      cpfCnpj?: string,
      email?: string
    ): Promise<AxiosResponse> => {
      return backend.get(`/ambassadors?cpfCnpj=${cpfCnpj}&email=${email}`);
    },

    createAmbassador: (ambassador: IAmbassador): Promise<AxiosResponse> => {
      return backend.post(`/ambassadors`, ambassador);
    },

    updateAmbassador: (ambassador: IAmbassador): Promise<AxiosResponse> => {
      return backend.put(`/ambassadors/1`, ambassador);
    },
  };
};

export default api;
