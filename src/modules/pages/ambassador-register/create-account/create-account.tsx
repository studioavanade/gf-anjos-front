import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import HeaderInfluencer from "../../../../assets/img/email/header-influenciador.svg";
import { Button, Stack, TextField, Grid, Paper, Box } from "@mui/material";
import {
  Topo,
  TitleLogin,
  DivSubmitButton,
  LoginLink,
} from "./styles";
import { showErrorToast } from "../../../../utils/toast/index";
import { createUser } from "../../../../store/auth/actions";
import { ACCESSIBILITY_ERROR } from "../../../../styles/colors";
import ROUTING_PATHS from "../../../../routes/paths";

const AmbassadorCreateAccount = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const titleEmail = "Cadastro";
  const buttonContinue = "Continuar";

  const [showPasswordRequirements, setShowPasswordRequirements] =
    useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    setShowPasswordRequirements(false);
    const { email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      showErrorToast("Senhas não correspondem!");
      return;
    }

    if (
      !/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(
        password
      )
    ) {
      setShowPasswordRequirements(true);
      showErrorToast(
        "Senha precisa atender aos requisitos mínimos de segurança!"
      );
      return;
    }

    dispatch(createUser(email, password, navigate));
  };

  return (
    <>
      <Grid container xs={12} justifyContent="center">
        <Topo>
          <img src={HeaderInfluencer} alt="Header" width="100%" />
        </Topo>
        <Paper
          elevation={12}
          style={{ position: "relative", top: "-70px" }}
        >
          <Box
            sx={{ width: 900, height: 550 }}
            justifyContent="center"
            display="flex"
          >
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "450px" }}>
              <TitleLogin>{titleEmail}</TitleLogin>
              <TextField
                id="email"
                label="E-mail"
                type="email"
                variant="standard"
                fullWidth
                margin="normal"
                {...register("email")}
              />
              <TextField
                id="password"
                label="Senha"
                variant="standard"
                fullWidth
                margin="normal"
                type="password"
                {...register("password")}
              />
              <TextField
                id="confirmPassword"
                label="Confirmar senha"
                variant="standard"
                fullWidth
                margin="normal"
                type="password"
                {...register("confirmPassword")}
              />
              {showPasswordRequirements && (
                <Stack
                  direction="column"
                  spacing={2}
                  color={ACCESSIBILITY_ERROR}
                >
                  <br />
                  Requisitos da senha:
                  <br />
                  * Ter 6 ou mais dígitos
                  <br />
                  * Possuir pelo menos 1 número
                  <br />
                  * Possuir pelo menos 1 caractere especial
                  <br />
                </Stack>
              )}
              <DivSubmitButton>
                <Button variant="contained" type="submit" fullWidth>
                  {buttonContinue}
                </Button>
              </DivSubmitButton>
            </form>
          </Box>
          <LoginLink>
          <Link to={ROUTING_PATHS.AmbassadorLogin}>Entrar</Link>
        </LoginLink>
        </Paper>
      </Grid>
    </>
  );
};

export default AmbassadorCreateAccount;
