import { Grid, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import {
  IconIdentityStepInactive,
  IconRegistrationStepInactive,
  IconPaymentStepInactive,
  IconConfirmationStepInactive,
  IconIdentityStepActive,
  IconRegistrationStepActive,
  IconPaymentStepActive,
  IconConfirmationStepActive,
} from "../../../assets/img";
import { IApplicationState } from "./../../../store/rootReducer";
import {
  StepsHeader,
  PageTitle,
  TopContent,
  StepName,
  StepsItemBG,
  BottomContent,
  Stroke,
} from "./styles";

import IdentityStep from "./0-identity";
import PersonalStep from "./1-personal";
import AddressStep from "./2-address";
import PaymentStep from "./3-payment";
import DonationSummaryStep from "./4-summary";
import ConfirmationStep from "./5-confirmation";
import BackgroundWithHeader from "./../../components/background-with-header/";

const DashedStroke = () => (
  <Stroke height="1px" width="67%">
    <g stroke="gray" strokeWidth="3px">
      <line x2="100%" y2="0" strokeLinecap="round" strokeDasharray="8,10" />
    </g>
  </Stroke>
);

const PaymentSteps = () => {
  const isSmallerThan900 = useMediaQuery("(max-width:900px)");

  const paymentState = useSelector((state: IApplicationState) => state.payment);

  const HeaderStepItem = ({ stepName, img, ...rest }: any) => (
    <Grid
      container
      item
      alignItems="center"
      direction="column"
      justifyContent="center"
      {...rest}
    >
      <StepsItemBG>
        <img src={img} width="81px" height="81px" alt="Passo" />
        {stepName && <StepName>{stepName}</StepName>}
      </StepsItemBG>
    </Grid>
  );

  const getCurrentStep = () => paymentState.currentStep;

  const Spacer = () => <div style={{ height: "32px" }} />;

  return (
    <BackgroundWithHeader>
      <TopContent container item alignItems="center" justifyContent="center">
        <PageTitle container item justifyContent="center">
          PAGAMENTO
        </PageTitle>
        <DashedStroke />
        <StepsHeader
          container
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <HeaderStepItem
            xs={12}
            md={3}
            stepName={isSmallerThan900 ? undefined : "IDENTIFICAÇÃO"}
            img={
              getCurrentStep() === 0 && !paymentState.paymentSubmitted
                ? IconIdentityStepActive
                : IconIdentityStepInactive
            }
          />
          <HeaderStepItem
            xs={12}
            md={3}
            stepName={isSmallerThan900 ? undefined : "CADASTRO"}
            img={
              (getCurrentStep() === 1 || getCurrentStep() === 2) &&
              !paymentState.paymentSubmitted
                ? IconRegistrationStepActive
                : IconRegistrationStepInactive
            }
          />
          <HeaderStepItem
            xs={12}
            md={3}
            stepName={isSmallerThan900 ? undefined : "PAGAMENTO"}
            img={
              getCurrentStep() === 3 && !paymentState.paymentSubmitted
                ? IconPaymentStepActive
                : IconPaymentStepInactive
            }
          />
          <HeaderStepItem
            xs={12}
            md={3}
            stepName={isSmallerThan900 ? undefined : "CONFIRMAÇÃO"}
            img={
              paymentState.paymentSubmitted === true
                ? IconConfirmationStepActive
                : IconConfirmationStepInactive
            }
          />
        </StepsHeader>
      </TopContent>
      <BottomContent container direction="row" spacing={3}>
        {!paymentState.paymentSubmitted ? (
          <>
            <Grid container item direction="column" xs={12} lg={4}>
              <IdentityStep currentStep={paymentState.currentStep} />
              <Spacer />
              <PersonalStep currentStep={paymentState.currentStep} />
            </Grid>
            <Grid container item direction="column" xs={12} lg={4}>
              <AddressStep currentStep={paymentState.currentStep} />
              <Spacer />
              <PaymentStep currentStep={paymentState.currentStep} />
            </Grid>
            <Grid container item direction="column" xs={12} lg={4}>
              <DonationSummaryStep />
            </Grid>
          </>
        ) : (
          <ConfirmationStep />
        )}
      </BottomContent>
    </BackgroundWithHeader>
  );
};

export default PaymentSteps;
