import { IPaymentInfo, PaymentTypes } from "./types";
import * as AuthService from "../../services/firebase-auth";
import PaymentService from "../../services/payment";
import { IDonator } from "../donator/types";

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
      dispatch(setPaymentStep(1));
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
    dispatch(setPaymentStep(2));
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
      dispatch(setPaymentStep(2));
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
      dispatch(setPaymentStep(3));
      dispatch(submitPaymentSuccess());
    });
};

const submitPaymentSuccess = () => ({
  payload: null,
  type: PaymentTypes.SUBMIT_PAYMENT_SUCCESS,
});

// Clear states
export const clearStates = () => (dispatch: any) => {
  dispatch({
    payload: null,
    type: PaymentTypes.CLEAR_STATES,
  });
};
