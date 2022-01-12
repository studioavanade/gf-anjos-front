import PaymentStepOpen from "./open";
import PaymentStepClosed from "./closed";
import { IPaymentSteps, IPaymentStepsProps } from "../interfaces";

const PaymentStep = ({ currentStep }: IPaymentStepsProps) => {
  return currentStep === IPaymentSteps.Payment ? (
    <PaymentStepOpen />
  ) : (
    <PaymentStepClosed />
  );
};

export default PaymentStep;
