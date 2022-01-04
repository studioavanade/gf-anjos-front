import { IPaymentStates, PaymentTypes } from "./types";

const initialState: IPaymentStates = {
  loading: false,
  error: undefined,
  currentStep: 0,
  donator: undefined,
  paymentSubmitted: false,
};

const paymentReducer = (
  state: IPaymentStates = initialState,
  action: any
): IPaymentStates => {
  switch (action.type) {
    case PaymentTypes.SET_PAYMENT_STEP:
      return {
        currentStep: action.payload,
      };
    case PaymentTypes.CREATE_DONATOR_ACCOUNT_SUCCESS:
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
    case PaymentTypes.SUBMIT_DONATOR_SUCCESS:
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
          paymentSubmitted: false,
        };
        case PaymentTypes.CLEAR_STATES:
          return {
            ...initialState
          };

    default:
      return state;
  }
};

export default paymentReducer;
