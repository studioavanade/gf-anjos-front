import EnvelopeIconSVG from "../../../../../assets/img/payment/icon-envelope-card.svg";

import { Button, TextField, Grid } from "@mui/material";

import { ButtonContainer, CardIdentityOpen, Title } from "./styles";

const IdentityStepOpen = () => {
  const titleIdentity = "Identificação";
  const createAccount = "Criar Conta";

  return (
    <form>
      <CardIdentityOpen direction="column">
        <Grid container item direction="row" spacing={3}>
          <Grid item>
            <img src={EnvelopeIconSVG} alt="IconEnvelope" />
          </Grid>
          <Grid item>
            <Title>{titleIdentity}</Title>
          </Grid>
        </Grid>
        <Grid container item>
          <TextField
            id="email"
            label="E-mail"
            type="email"
            variant="standard"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid container item>
          <TextField
            id="confirmPassword"
            label="Confirmar senha"
            variant="standard"
            margin="normal"
            type="password"
            fullWidth
          />
        </Grid>
        <Grid container item>
          <TextField
            id="confirmPassword"
            label="Confirmar senha"
            variant="standard"
            fullWidth
            type="password"
            margin="normal"
          />
        </Grid>
        <ButtonContainer container item>
          <Button variant="contained" type="submit" fullWidth>
            {createAccount}
          </Button>
        </ButtonContainer>
      </CardIdentityOpen>
    </form>
  );
};

export default IdentityStepOpen;
