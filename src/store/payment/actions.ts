import {
  IDonatorPersonalDataForm,
  IPaymentInfo,
  IPaymentPayload,
  PaymentTypes,
} from "./types";
import * as AuthService from "../../services/firebase-auth";
import PaymentService from "../../services/payment";
import DonatorService from "../../services/donator";
import { IDonator } from "../donator/types";
import { IAddress } from "../shared";
import { AxiosResponse } from "axios";
import { PAYMENT_VALUE_CAMPAIGNID_STORAGE_KEY } from "../../constants";
import { setSessionStorage } from "../../utils/storage";

export const setPaymentStep = (step: number) => (dispatch: any) => {
  dispatch(setPaymentStepSuccess(step));
};

const setPaymentStepSuccess = (step: number) => ({
  payload: step,
  type: PaymentTypes.SET_PAYMENT_STEP,
});

// Donator account
export const createDonatorAuth =
  (email: string, password: string) => (dispatch: any) => {
    AuthService.createUser(email, password).then(() => {
      dispatch(createDonatorAuthSuccess(email));
    });
  };

const createDonatorAuthSuccess = (email: string) => ({
  payload: email,
  type: PaymentTypes.CREATE_DONATOR_AUTH_SUCCESS,
});

// Donator Submit
export const createDonator =
  (
    donator: IDonator,
    onSuccessCallback: any = null,
    onErrorCallback: any = null
  ) =>
  (dispatch: any) => {
    DonatorService()
      .updateOrCreateDonator(donator)
      .then((res: AxiosResponse) => {
        dispatch(submitDonatorSuccess(res.data));
        if (onSuccessCallback) onSuccessCallback();
      })
      .catch((error) => {
        const errorMessage = JSON.parse(error.request.response).message;
        console.error("Erro ao cadastrar doador: " + errorMessage);
        if (onErrorCallback) onErrorCallback(errorMessage || "");
      });
  };

const submitDonatorSuccess = (data: any) => ({
  payload: data,
  type: PaymentTypes.CREATE_DONATOR_SUCCESS,
});

// Submit Payment
export const submitPayment =
  (
    payment: IPaymentPayload,
    onSuccessCallback: any = null,
    onErrorCallback: any = null
  ) =>
  (dispatch: any) => {
    PaymentService()
      .submitPayment(payment)
      .then(() => {
        dispatch(submitPaymentSuccess());
        if (onSuccessCallback) onSuccessCallback();
      })
      .catch((error) => {
        const errorMessage = JSON.parse(error.request.response).message;
        console.error("Erro ao processar pagamento: " + errorMessage);
        if (onErrorCallback) onErrorCallback(errorMessage || "");
      });
  };

export const submitPaymentSuccess = () => ({
  payload: null,
  type: PaymentTypes.SUBMIT_PAYMENT_SUCCESS,
});

export const setDonationValueAndCampaignId =
  (donationValue: number, campaignId: number) => (dispatch: any) => {
    const payload = { donationValue, campaignId };
    setSessionStorage(
      PAYMENT_VALUE_CAMPAIGNID_STORAGE_KEY,
      JSON.stringify(payload)
    );
    dispatch({
      payload,
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
