import PersonalStepOpen from "./open";
import PersonalStepClosed from "./closed";
import { IPaymentSteps, IPaymentStepsProps } from "../interfaces";

const PersonalStep = ({ currentStep }: IPaymentStepsProps) => {
  return currentStep === IPaymentSteps.Personal ? (
    <PersonalStepOpen />
  ) : (
    <PersonalStepClosed />
  );
};

export default PersonalStep;
