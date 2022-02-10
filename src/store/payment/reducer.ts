import { IPaymentStates, PaymentTypes } from "./types";

const initialState: IPaymentStates = {
  loading: false,
  error: undefined,
  currentStep: 0,
  donator: undefined,
  paymentSubmitted: false,
  donationValue: 20,
  campaignId: 0,
};

const paymentReducer = (
  state: IPaymentStates = initialState,
  action: any
): IPaymentStates => {
  switch (action.type) {
    case PaymentTypes.SET_PAYMENT_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    case PaymentTypes.CREATE_DONATOR_AUTH_SUCCESS:
      return {
        ...state,
        donator: {
          email: action.payload,
        },
      };
    case PaymentTypes.SAVE_DONATOR_PERSONAL_DATA_SUCCESS:
      return {
        ...state,
        donator: {
          email: state.donator?.email || "",
          ...action.payload.personalData,
        },
      };
    case PaymentTypes.CREATE_DONATOR_SUCCESS:
      return {
        ...state,
        donator: {
          ...state.donator,
          id: action.payload.id,
        },
      };
    case PaymentTypes.SUBMIT_PAYMENT_SUCCESS:
      return {
        ...state,
        paymentSubmitted: true,
      };
    case PaymentTypes.CLEAR_STATES:
      return {
        ...initialState,
      };
    case PaymentTypes.SET_DONATION_VALUE:
      return {
        ...state,
        donationValue: action.payload.donationValue,
        campaignId: action.payload.campaignId,
      };
    case PaymentTypes.SET_DONATOR_EMAIL:
      return {
        ...state,
        donator: {
          ...state.donator,
          email: action.payload,
        },
      };
    case PaymentTypes.SET_DONATOR_PERSONAL_DATA:
      return {
        ...state,
        donator: {
          ...state.donator,
          ...action.payload,
        },
      };
    case PaymentTypes.SET_DONATOR_ADDRESS:
      return {
        ...state,
        donator: {
          ...state.donator,
          address: action.payload,
        },
      };

    default:
      return state;
  }
};

export default paymentReducer;
