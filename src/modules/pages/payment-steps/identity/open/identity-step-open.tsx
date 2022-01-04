import HeaderInfluencer from "../../../../../assets/img/payment/header-influencer.svg";
import EnvelopeIconSVG from "../../../../../assets/img/payment/icon-envelope-card.svg";

import { Button, TextField } from "@mui/material";
import Grid from '@mui/material/Grid';

import {
  BoxContainer,
  PaymentSteps,
  Topo,
  BoxCard,
  CardIdentityOpen,
  TitleIdentity,
  EnvelopeIcon,
  DivSubmitButton,
} from "./identity-step-open_styles";

const IdentityStepOpen = (props: any) => {

   return (
    <>
      <Topo src={HeaderInfluencer} alt="HeaderInfluencerTopo" />
      <BoxContainer>
        <PaymentSteps>Payments Steps</PaymentSteps>
        <BoxCard>
          <Grid>
          <CardIdentityOpen>
            <EnvelopeIcon>
              <img src={EnvelopeIconSVG} alt="IconEnvelope" />
            <TitleIdentity>
                {props.titleIdentity}
                </TitleIdentity>
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
                  {props.createCont}
                </Button>
              </DivSubmitButton>
              </form>
          </CardIdentityOpen>
          </Grid>
        </BoxCard>
      </BoxContainer>
    </>
  );
};

export default IdentityStepOpen;
