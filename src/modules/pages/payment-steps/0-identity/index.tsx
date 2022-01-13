import IdentityStepOpen from "./open";
import IdentityStepClosed from "./closed";
import { IPaymentSteps, IPaymentStepsProps } from "../interfaces";

const IdentityStep = ({ currentStep }: IPaymentStepsProps) => {
  return currentStep === IPaymentSteps.Identity ? (
    <IdentityStepOpen />
  ) : (
    <IdentityStepClosed />
  );
};

export default IdentityStep;
