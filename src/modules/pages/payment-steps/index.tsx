import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import {
  HEADER_SHORT,
  ICON_IDENTITY_STEP_INACTIVE,
  ICON_REGISTRATION_STEP_INACTIVE,
  ICON_PAYMENT_STEP_INACTIVE,
  ICON_CONFIRMATION_STEP_INACTIVE,
  ICON_IDENTITY_STEP_ACTIVE,
  ICON_REGISTRATION_STEP_ACTIVE,
  ICON_PAYMENT_STEP_ACTIVE,
  ICON_CONFIRMATION_STEP_ACTIVE,
} from "../../../assets/img";
import { ApplicationState } from "./../../../store/rootReducer";
import {
  InnerContentContainer,
  TopImage,
  StepsHeader,
  PageTitle,
  RootContainer,
  TopContent,
  StepName,
  StepsItemBG,
  BottomContent,
  Background,
  Stroke,
} from "./styles";

import IdentityStep from "./0-identity";
import PersonalStep from "./1-personal";
import AddressStep from "./2-address";
import PaymentStep from "./3-payment";
import DonationSummaryStep from "./4-summary";
import ConfirmationStep from "./5-confirmation";
import { DARK_BLUE } from "./../../../styles/colors";

const DashedStroke = () => (
  <Stroke height="1px" width="67%">
    <g stroke="gray" stroke-width="3px">
      <line x2="100%" y2="0" stroke-linecap="round" stroke-dasharray="8,10" />
    </g>
  </Stroke>
);

const PaymentSteps = () => {
  const title = "PAGAMENTO";

  const paymentState = useSelector((state: ApplicationState) => state.payment);

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
        <StepName>{stepName}</StepName>
      </StepsItemBG>
    </Grid>
  );

  const getCurrentStep = () => paymentState.currentStep;

  const Spacer = () => <div style={{ height: "32px" }} />;

  return (
    <RootContainer direction="column" wrap="nowrap">
      <Background>
        <div style={{ height: "fit-content", backgroundColor: DARK_BLUE }}>
          <TopImage src={HEADER_SHORT} alt="banner" />
        </div>
        <div style={{ backgroundColor: "white", height: "100%" }} />
      </Background>
      <InnerContentContainer
        container
        item
        alignItems="center"
        direction="column"
        wrap="nowrap"
      >
        <TopContent container item alignItems="center" justifyContent="center">
          <PageTitle container item justifyContent="center">
            {title}
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
              stepName="IDENTIFICAÇÃO"
              img={
                getCurrentStep() === 0
                  ? ICON_IDENTITY_STEP_ACTIVE
                  : ICON_IDENTITY_STEP_INACTIVE
              }
            />
            <HeaderStepItem
              xs={12}
              md={3}
              stepName="CADASTRO"
              img={
                getCurrentStep() === 1 || getCurrentStep() === 2
                  ? ICON_REGISTRATION_STEP_ACTIVE
                  : ICON_REGISTRATION_STEP_INACTIVE
              }
            />
            <HeaderStepItem
              xs={12}
              md={3}
              stepName="PAGAMENTO"
              img={
                getCurrentStep() === 3
                  ? ICON_PAYMENT_STEP_ACTIVE
                  : ICON_PAYMENT_STEP_INACTIVE
              }
            />
            <HeaderStepItem
              xs={12}
              md={3}
              stepName="CONFIRMAÇÃO"
              img={
                paymentState.paymentSubmitted === true
                  ? ICON_CONFIRMATION_STEP_ACTIVE
                  : ICON_CONFIRMATION_STEP_INACTIVE
              }
            />
          </StepsHeader>
        </TopContent>
        <BottomContent container direction="row" spacing={3}>
          {!paymentState.paymentSubmitted ? (
            <>
              <Grid item direction="column" xs={12} lg={4}>
                <IdentityStep currentStep={paymentState.currentStep} />
                <Spacer />
                <PersonalStep currentStep={paymentState.currentStep} />
              </Grid>
              <Grid item direction="column" xs={12} lg={4}>
                <AddressStep currentStep={paymentState.currentStep} />
                <Spacer />
                <PaymentStep currentStep={paymentState.currentStep} />
              </Grid>
              <Grid item container direction="column" xs={12} lg={4}>
                <DonationSummaryStep />
              </Grid>
            </>
          ) : (
            <ConfirmationStep />
          )}
        </BottomContent>
      </InnerContentContainer>
    </RootContainer>
  );
};

export default PaymentSteps;
