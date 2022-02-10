import axios, { AxiosInstance, AxiosResponse } from "axios";
import apis from "../../constants/apis";
import { IPaymentInfo, IPaymentPayload } from "../../store/payment/types";

interface IApi {
  backend: AxiosInstance;
  submitPayment(paymentInfo: IPaymentPayload): Promise<AxiosResponse>;
}

const api = (): IApi => {
  const backend = axios.create({
    baseURL: apis.backend,
  });

  return {
    backend,

    submitPayment: (paymentInfo: IPaymentPayload): Promise<AxiosResponse> => {
      return backend.post(`/process-pay`, paymentInfo);
    },
  };
};

export default api;
