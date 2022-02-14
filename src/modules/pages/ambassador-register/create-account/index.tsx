import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { Button, Stack, TextField, Grid } from "@mui/material";
import { TitleLogin, DivSubmitButton, LoginLink, Form } from "./styles";
import { showErrorToast } from "../../../../utils/toast/";
import { createUser, signIn } from "../../../../store/auth/actions";
import { ACCESSIBILITY_ERROR } from "../../../../styles/colors";
import ROUTING_PATHS from "../../../../routes/paths";
import BackgroundWithHeader from "../../../components/background-with-header/";
import MainContainer from "../../../components/main-container/index";
import { isEmailValid } from "../../../../utils";
import {
  clearAmbassadorState,
  setAmbassadorEmail,
  setIsEditting,
} from "../../../../store/ambassador/actions";
import { signOut } from "../../../../store/auth/actions";
import {
  clearLoading,
  setLoading,
} from "../../../../store/loading-progress/actions";
import { clearCampaignState } from "../../../../store/campaign/actions";
import { clearStorage } from "../../../../utils/storage";

const AmbassadorCreateAccount = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const titleEmail = "Cadastro";
  const buttonContinue = "Continuar";

  const [showPasswordRequirements, setShowPasswordRequirements] =
    useState(false);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(signOut());
    dispatch(clearAmbassadorState());
    dispatch(clearCampaignState());
    dispatch(setIsEditting(false));
    clearStorage();
    dispatch(clearLoading());
  }, [dispatch]);

  const onSubmit = (data: any) => {
    setShowPasswordRequirements(false);
    const { email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      showErrorToast("Senhas não correspondem!");
      return;
    } else if (!isEmailValid(email)) {
      showErrorToast("E-mail inválido!");
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

    dispatch(setLoading());
    dispatch(
      createUser(email, password, () => {
        dispatch(
          signIn(email, password, () => {
            dispatch(setAmbassadorEmail(email));
            navigate(ROUTING_PATHS.PersonalInformations);
          })
        );
      })
    );
  };

  return (
    <BackgroundWithHeader>
      <MainContainer maxWidth="70vw">
        <Grid container justifyContent="center" alignItems="center">
          <Form onSubmit={handleSubmit(onSubmit)}>
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
              <Stack direction="column" spacing={2} color={ACCESSIBILITY_ERROR}>
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
              <Button
                variant="contained"
                type="submit"
                fullWidth
                data-testid="button-continue"
              >
                {buttonContinue}
              </Button>
            </DivSubmitButton>
          </Form>
        </Grid>
        <LoginLink>
          <Link to={ROUTING_PATHS.AmbassadorLogin}>Entrar</Link>
        </LoginLink>
      </MainContainer>
    </BackgroundWithHeader>
  );
};

export default AmbassadorCreateAccount;
