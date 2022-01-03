import { PaymentTypes } from "./types";

export const setPaymentStep = (step: number) => (dispatch: any) => {
  dispatch(setPaymentStepSuccess(step));
};

const setPaymentStepSuccess = (step: number) => ({
  payload: step,
  type: PaymentTypes.SET_PAYMENT_STEP,
});
