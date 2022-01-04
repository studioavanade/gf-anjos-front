import EnvelopeIconSVG from "../../../../../assets/img/payment/icon-envelope-card.svg";

import { Button, TextField } from "@mui/material";

import {
  CardIdentityOpen,
  TitleIdentity,
  EnvelopeIcon,
  DivSubmitButton,
} from "./identity-step-open_styles";

const IdentityStepOpen = () => {
  
  const titleIdentity = "Identificação";
  const createCont = "Criar Conta";

  return (
    <>
      <CardIdentityOpen>
        <EnvelopeIcon>
          <img src={EnvelopeIconSVG} alt="IconEnvelope" />
          <TitleIdentity>{titleIdentity}</TitleIdentity>
        </EnvelopeIcon>
        <form style={{ width: "370px", paddingLeft: "5px" }}>
          <TextField
            id="email"
            label="E-mail"
            type="email"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="confirmPassword"
            label="Confirmar senha"
            variant="standard"
            fullWidth
            margin="normal"
            type="password"
          />
          <TextField
            id="confirmPassword"
            label="Confirmar senha"
            variant="standard"
            fullWidth
            margin="normal"
            type="password"
          />
          <DivSubmitButton>
            <Button variant="contained" type="submit" fullWidth>
              {createCont}
            </Button>
          </DivSubmitButton>
        </form>
      </CardIdentityOpen>
    </>
  );
};

export default IdentityStepOpen;
