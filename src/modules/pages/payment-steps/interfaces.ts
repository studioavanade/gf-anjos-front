export interface IPaymentStepsProps {
  currentStep: number;
}

export enum IPaymentSteps {
  Identity = 0,
  Personal = 1,
  Address = 2,
  Payment = 3,
  Summary = 4,
  Confirmation = 5,
}
