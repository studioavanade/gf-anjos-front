import { Grid, TextField } from "@mui/material";
import { HEADER_LARGE } from "../../../assets/img";
import {
  RootContainer,
  TopImage,
  HeaderContainer,
  PageTitle,
  TopImageBlue,
} from "./styles";

const PaymentSteps = () => {
  const title = "Pagamento";

  return (
    <>
      <TopImage src={HEADER_LARGE} alt="banner" />
      <TopImageBlue />
      <RootContainer
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <PageTitle item>{title}</PageTitle>
        <HeaderContainer></HeaderContainer>
      </RootContainer>
    </>
  );
};

export default PaymentSteps;
