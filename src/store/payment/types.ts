import { IDonator } from "../donator/types";

export enum PaymentTypes {
  SET_PAYMENT_STEP = "@payment/SET_PAYMENT_STEP",
  CREATE_DONATOR_ACCOUNT_SUCCESS = "@payment/CREATE_DONATOR_ACCOUNT_SUCCESS",
  SAVE_DONATOR_PERSONAL_DATA_SUCCESS = "@payment/SAVE_DONATOR_PERSONAL_DATA_SUCCESS",
  SUBMIT_DONATOR_SUCCESS = "@payment/SUBMIT_DONATOR_SUCCESS",
  SUBMIT_PAYMENT_SUCCESS = "@payment/SUBMIT_PAYMENT",
  CLEAR_STATES = "@payment/CLEAR_STATES",
}

export interface IPaymentInfo {
  donatorId: string;
  campaignId: string;
  value: number;
  card: {
    holder: string;
    number: string;
    csc: string;
    expiration: {
      month: string;
      year: string;
    };
  };
}

export interface IPaymentStates {
  loading?: boolean;
  error?: any;
  currentStep: number;
  donator?: IDonator;
  paymentSubmitted?: boolean;
}
