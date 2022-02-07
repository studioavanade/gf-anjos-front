import { useSelector } from "react-redux";
import EnvelopeIconSVG from "../../../../../assets/img/payment/icon-envelope-card.svg";
import { Grid } from "@mui/material";
import { CardIdentityClosed, Title, EmailGrid } from "./styles";
import { IApplicationState } from "../../../../../store/rootReducer";

const IdentityStepClosed = () => {
  const titleIdentity = "Identificação";

  const paymentState = useSelector((state: IApplicationState) => state.payment);

  return (
    <CardIdentityClosed container item direction="column">
      <Grid container item direction="row" spacing={3}>
        <Grid item flexGrow={0}>
          <img src={EnvelopeIconSVG} alt="IconEnvelope" />
        </Grid>
        <Grid item flexGrow={0}>
          <Title>{titleIdentity}</Title>
        </Grid>
        <EmailGrid container item>
          {paymentState.donator &&
          paymentState.donator.email &&
          paymentState.donator.email.length > 0
            ? paymentState.donator.email
            : ""}
        </EmailGrid>
      </Grid>
    </CardIdentityClosed>
  );
};

export default IdentityStepClosed;
