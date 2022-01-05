import axios, { AxiosInstance, AxiosResponse } from "axios";

import APIS from "../../constants/apis";
import store from "../../store";
import { IPaymentInfo } from "../../store/payment/types";
import { IDonator } from "./../../store/donator/types";

interface IApi {
  backend: AxiosInstance;
  createDonator(donator: IDonator): Promise<AxiosResponse>;
  submitPayment(paymentInfo: IPaymentInfo): Promise<AxiosResponse>;
}

const api = (): IApi => {
  const backend = axios.create({
    baseURL: APIS.backend,
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

    createDonator: (donator: IDonator): Promise<AxiosResponse> => {
      return backend.post(`/donator/`, donator);
    },

    submitPayment: (paymentInfo: IPaymentInfo): Promise<AxiosResponse> => {
      return backend.post(`/payment`, paymentInfo);
    },
  };
};

export default api;
