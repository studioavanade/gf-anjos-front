import EnvelopeIconSVG from "../../../../../assets/img/payment/icon-envelope-card.svg";
import { Link, Grid } from "@mui/material";
import { CardIdentityClosed, Title, ChangeDataGrid, EmailGrid } from "./styles";

const IdentityStepClosed = () => {
  const titleIdentity = "Identificação";
  const changeData = "Alterar dados";
  const personEmail = "eduardo.lyra@email.com";

  return (
    <CardIdentityClosed container item direction="column">
      <Grid container item direction="row" spacing={3}>
        <Grid item flexGrow={0}>
          <img src={EnvelopeIconSVG} alt="IconEnvelope" />
        </Grid>
        <Grid item flexGrow={0}>
          <Title>{titleIdentity}</Title>
        </Grid>
        <ChangeDataGrid item flexGrow={1}>
          <Link href="#" style={{ marginLeft: "auto" }}>
            {changeData}
          </Link>
        </ChangeDataGrid>
        <EmailGrid container item>
          {personEmail}
        </EmailGrid>
      </Grid>
    </CardIdentityClosed>
  );
};

export default IdentityStepClosed;
