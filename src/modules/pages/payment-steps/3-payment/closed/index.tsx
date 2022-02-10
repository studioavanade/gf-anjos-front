import { Grid } from "@mui/material";
import PaymentIconSVG from "../../../../../assets/img/payment/icon-money-card.svg";

import { CardPaymentClosed, TitlePayment, PaymentData } from "./styles";

const PaymentStepClosed = () => {
  const titlePayment = "Pagamento";
  const subTitle = "Aguardando o preenchimento dos dados";

  return (
    <CardPaymentClosed container item direction="column">
      <Grid container item direction="row">
        <Grid item>
          <img src={PaymentIconSVG} alt="IconAddress" />
        </Grid>
        <Grid item>
          <TitlePayment>{titlePayment}</TitlePayment>
        </Grid>
      </Grid>
      <PaymentData>{subTitle}</PaymentData>
    </CardPaymentClosed>
  );
};

export default PaymentStepClosed;
