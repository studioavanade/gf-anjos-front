import axios, { AxiosInstance, AxiosResponse } from "axios";

import apis from "../../constants/apis";
import { IPaymentInfo } from "../../store/payment/types";
import { IDonator } from "../../store/donator/types";

interface IApi {
  backend: AxiosInstance;
  updateOrCreateDonator(donator: IDonator): Promise<AxiosResponse>;
}

const api = (): IApi => {
  const backend = axios.create({
    baseURL: apis.backend,
  });

  return {
    backend,

    updateOrCreateDonator: (donator: IDonator): Promise<AxiosResponse> => {
      return backend.put(`/donators/`, donator);
    },
  };
};

export default api;
