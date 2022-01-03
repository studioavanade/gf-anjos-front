export enum PaymentTypes {
  SET_PAYMENT_STEP = "@payment/SET_PAYMENT_STEP",
}

export interface IPaymentStates {
  loading?: boolean;
  error?: any;
  currentStep: number;
}
