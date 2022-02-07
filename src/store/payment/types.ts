import { IDonator } from "../donator/types";

export enum PaymentTypes {
  SET_PAYMENT_STEP = "@payment/SET_PAYMENT_STEP",
  SET_DONATION_VALUE = "@payment/SET_DONATION_VALUE",
  CREATE_DONATOR_ACCOUNT_SUCCESS = "@payment/CREATE_DONATOR_ACCOUNT_SUCCESS",
  SAVE_DONATOR_PERSONAL_DATA_SUCCESS = "@payment/SAVE_DONATOR_PERSONAL_DATA_SUCCESS",
  SUBMIT_DONATOR_SUCCESS = "@payment/SUBMIT_DONATOR_SUCCESS",
  SUBMIT_PAYMENT_SUCCESS = "@payment/SUBMIT_PAYMENT",
  CLEAR_STATES = "@payment/CLEAR_STATES",
  SET_DONATOR_EMAIL = "@payment/SET_DONATOR_EMAIL",
  SET_DONATOR_PERSONAL_DATA = "@payment/SET_DONATOR_PERSONAL_DATA",
  SET_DONATOR_ADDRESS = "@payment/SET_DONATOR_ADDRESS",
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

export interface IDonatorPersonalDataForm {
  firstName: string;
  lastName: string;
  birthDate: Date;
  cpf: string;
  phone: string;
  followAccountabilityReports?: boolean;
  allowCommunications?: boolean;
  allowPrivacyData?: boolean;
}

export interface IPaymentPayload {
  campaignId: string;
  donator: IDonator;
  payment: IPaymentInfo;
}

export interface IPaymentStates {
  loading?: boolean;
  error?: any;
  currentStep: number;
  donator?: IDonator;
  donationValue: number;
  paymentSubmitted: boolean;
  donationItemId: string;
}
