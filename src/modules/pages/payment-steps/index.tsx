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
} from "../../../assets/img/index";
import { ApplicationState } from "./../../../store/rootReducer";
import {
  OuterContentContainer,
  TopImage,
  StepsHeader,
  PageTitle,
  RootContainer,
  TopContent,
  StepName,
  StepsItemBG,
  BottomContent,
} from "./styles";

const DashedStroke = () => (
  <svg
    height="1px"
    width="70%"
    style={{
      position: "relative",
      top: "93px",
      zIndex: "1",
      marginLeft: "20%",
    }}
  >
    <g stroke="gray" stroke-width="3px">
      <line x2="100%" y2="0" stroke-linecap="round" stroke-dasharray="8,10" />
    </g>
  </svg>
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

  return (
    <RootContainer>
      <TopImage src={HEADER_SHORT} alt="banner" />
      <OuterContentContainer container alignItems="center" direction="column">
        <TopContent>
          <PageTitle item>{title}</PageTitle>
          <DashedStroke />
          <StepsHeader
            container
            justifyContent="space-between"
            alignItems="center"
            direction="row"
          >
            <HeaderStepItem
              xs={3}
              stepName="IDENTIFICAÇÃO"
              img={
                getCurrentStep() === 0
                  ? ICON_IDENTITY_STEP_ACTIVE
                  : ICON_IDENTITY_STEP_INACTIVE
              }
            />
            <HeaderStepItem
              xs={3}
              stepName="CADASTRO"
              img={
                getCurrentStep() === 1
                  ? ICON_REGISTRATION_STEP_ACTIVE
                  : ICON_REGISTRATION_STEP_INACTIVE
              }
            />
            <HeaderStepItem
              xs={3}
              stepName="PAGAMENTO"
              img={
                getCurrentStep() === 2
                  ? ICON_PAYMENT_STEP_ACTIVE
                  : ICON_PAYMENT_STEP_INACTIVE
              }
            />
            <HeaderStepItem
              xs={3}
              stepName="CONFIRMAÇÃO"
              img={
                getCurrentStep() === 3
                  ? ICON_CONFIRMATION_STEP_ACTIVE
                  : ICON_CONFIRMATION_STEP_INACTIVE
              }
            />
          </StepsHeader>
        </TopContent>
        <BottomContent>Etapa atual: {paymentState.currentStep}</BottomContent>
      </OuterContentContainer>
    </RootContainer>
  );
};

export default PaymentSteps;
