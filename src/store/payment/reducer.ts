import { IPaymentStates, PaymentTypes } from "./types";

const initialState: IPaymentStates = {
  loading: false,
  error: undefined,
  currentStep: 0,
};

const paymentReducer = (
  state: IPaymentStates = initialState,
  action: any
): IPaymentStates => {
  switch (action.type) {
    case PaymentTypes.SET_PAYMENT_STEP:
      return {
        currentStep: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default paymentReducer;
