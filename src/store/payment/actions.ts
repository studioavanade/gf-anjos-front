import { IDonatorPersonalDataForm, IPaymentInfo, PaymentTypes } from "./types";
import * as AuthService from "../../services/firebase-auth";
import PaymentService from "../../services/payment";
import { IDonator } from "../donator/types";
import { IAddress } from "../shared";

interface IPersonalData {
  name: string;
  lastName: string;
  birthDate: Date;
  cpf: string;
  phone: string;
  followAccountabilityReports: boolean;
  allowCommunications: boolean;
  allowPrivacyData: boolean;
}

export const setPaymentStep = (step: number) => (dispatch: any) => {
  dispatch(setPaymentStepSuccess(step));
};

const setPaymentStepSuccess = (step: number) => ({
  payload: step,
  type: PaymentTypes.SET_PAYMENT_STEP,
});

// Donator account
export const createDonatorAccount =
  (email: string, password: string) => (dispatch: any) => {
    AuthService.createUser(email, password).then(() => {
      dispatch(createDonatorAccountSuccess(email));
    });
  };

const createDonatorAccountSuccess = (email: string) => ({
  payload: email,
  type: PaymentTypes.CREATE_DONATOR_ACCOUNT_SUCCESS,
});

// Donator Personal Data
export const saveDonatorPersonalData =
  (personalData: IPersonalData) => (dispatch: any) => {
    dispatch(saveDonatorPersonalDataSuccess(personalData));
  };

const saveDonatorPersonalDataSuccess = (personalData: IPersonalData) => ({
  payload: personalData,
  type: PaymentTypes.SAVE_DONATOR_PERSONAL_DATA_SUCCESS,
});

// Donator Submit
export const submitDonator = (donator: IDonator) => (dispatch: any) => {
  PaymentService()
    .createDonator(donator)
    .then((data: any) => {
      dispatch(submitDonatorSuccess(data));
    });
};

const submitDonatorSuccess = (data: any) => ({
  payload: data,
  type: PaymentTypes.SUBMIT_DONATOR_SUCCESS,
});

// Submit Payment
export const submitPayment = (payment: IPaymentInfo) => (dispatch: any) => {
  PaymentService()
    .submitPayment(payment)
    .then(() => {
      dispatch(submitPaymentSuccess());
    });
};

export const submitPaymentSuccess = () => ({
  payload: null,
  type: PaymentTypes.SUBMIT_PAYMENT_SUCCESS,
});

export const setDonationValue = (donationValue: number) => (dispatch: any) => {
  dispatch({
    payload: donationValue,
    type: PaymentTypes.SET_DONATION_VALUE,
  });
};

export const clearStates = () => (dispatch: any) => {
  dispatch({
    payload: null,
    type: PaymentTypes.CLEAR_STATES,
  });
};

export const setDonatorEmail = (email: string) => (dispatch: any) => {
  dispatch({
    payload: email,
    type: PaymentTypes.SET_DONATOR_EMAIL,
  });
};

export const setDonatorPersonalData =
  (data: IDonatorPersonalDataForm) => (dispatch: any) => {
    dispatch({
      payload: data,
      type: PaymentTypes.SET_DONATOR_PERSONAL_DATA,
    });
  };

export const setDonatorAddress = (address: IAddress) => (dispatch: any) => {
  dispatch({
    payload: address,
    type: PaymentTypes.SET_DONATOR_ADDRESS,
  });
};

export const createDonator = (payment: IPaymentInfo) => (dispatch: any) => {
  PaymentService()
    .submitPayment(payment)
    .then(() => {
      dispatch(setPaymentStep(3));
      dispatch(submitPaymentSuccess());
    });
};
