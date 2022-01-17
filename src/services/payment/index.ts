import axios, { AxiosInstance, AxiosResponse } from "axios";

import apis from "../../constants/apis";
import { IPaymentInfo } from "../../store/payment/types";
import { IDonator } from "./../../store/donator/types";

interface IApi {
  backend: AxiosInstance;
  createDonator(donator: IDonator): Promise<AxiosResponse>;
  submitPayment(paymentInfo: IPaymentInfo): Promise<AxiosResponse>;
}

const api = (): IApi => {
  const backend = axios.create({
    baseURL: apis.backend,
  });

  return {
    backend,

    createDonator: (donator: IDonator): Promise<AxiosResponse> => {
      return backend.post(`/donators/`, donator);
    },

    submitPayment: (paymentInfo: IPaymentInfo): Promise<AxiosResponse> => {
      return backend.post(`/payment`, paymentInfo);
    },
  };
};

export default api;
