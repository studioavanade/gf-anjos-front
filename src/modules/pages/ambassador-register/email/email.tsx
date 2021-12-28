import HeaderInfluencer from "../../../../assets/img/email/header-influenciador.svg";
import { Button, TextField } from "@mui/material";
import {
  RootContainer,
  Topo,
  BoxCard,
  StyleCard,
  TitleLogin,
  DivSubmitButton,
} from "./email_styles";

const BasicRegistration = () => {
  const titleEmail = "Cadastro";
  const buttonContinue = "Continuar";

  return (
    <>
      <RootContainer>
        <Topo
          src={HeaderInfluencer}
          alt="banner"
          style={{
            paddingBottom: "90px",
            boxShadow: "box-shadow: inset, 0 0 1em black",
          }}
        />
        <BoxCard>
          <StyleCard>
            <form style={{ width: "450px" }}>
              <TitleLogin>{titleEmail}</TitleLogin>
              <TextField
                id="email"
                label="E-mail"
                variant="standard"
                fullWidth
                margin="normal"
              />
              <TextField
                id="password"
                label="Senha"
                variant="standard"
                autoComplete="on"
                fullWidth
                margin="normal"
              />
              <TextField
                id="confirmPassword"
                label="Confirmar senha"
                variant="standard"
                fullWidth
                margin="normal"
              />
              <DivSubmitButton>
                <Button variant="contained" type="submit" fullWidth>
                  {buttonContinue}
                </Button>
              </DivSubmitButton>
            </form>
          </StyleCard>
        </BoxCard>
      </RootContainer>
    </>
  );
};

export default BasicRegistration;
