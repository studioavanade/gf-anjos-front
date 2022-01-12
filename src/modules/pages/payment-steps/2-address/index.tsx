import AddressStepOpen from "./open";
import AddressStepClosed from "./closed";
import { IPaymentSteps, IPaymentStepsProps } from "../interfaces";

const AddressStep = ({ currentStep }: IPaymentStepsProps) => {
  return currentStep === IPaymentSteps.Address ? (
    <AddressStepOpen />
  ) : (
    <AddressStepClosed />
  );
};

export default AddressStep;
