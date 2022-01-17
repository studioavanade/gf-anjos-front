import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import EnvelopeIconSVG from "../../../../../assets/img/payment/icon-envelope-card.svg";

import {
  Button,
  TextField,
  Grid,
  Stack,
  InputAdornment,
  IconButton,
  FilledInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { ButtonContainer, CardIdentityOpen, Title } from "./styles";
import { showErrorToast } from "../../../../../utils/toast";
import { ACCESSIBILITY_ERROR } from "../../../../../styles/colors";
import { createUser } from "../../../../../store/auth/actions";
import { useState } from "react";
import { ApplicationState } from "../../../../../store/rootReducer";
import {
  setDonatorEmail,
  setPaymentStep,
} from "../../../../../store/payment/actions";
import { isEmailValid } from "../../../../../utils";
import VerticalSpacer from "./../../../../components/vertical-spacer/index";
import { setLoading } from "../../../../../store/loading-progress/actions";

interface ISubmitData {
  email: string;
  password: string;
  confirmPassword: string;
}

const IdentityStepOpen = () => {
  const titleIdentity = "Identificação";
  const createAccount = "Criar Conta";

  const dispatch = useDispatch();

  const { handleSubmit, register } = useForm();

  const [showPasswordRequirements, setShowPasswordRequirements] =
    useState(false);

  const paymentState = useSelector(
    (state: ApplicationState) => state.payment.currentStep
  );
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: ISubmitData) => {
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
        dispatch(setDonatorEmail(email));
        dispatch(setPaymentStep(paymentState + 1));
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardIdentityOpen container direction="column">
        <Grid container item direction="row" spacing={3}>
          <Grid item>
            <img src={EnvelopeIconSVG} alt="IconEnvelope" />
          </Grid>
          <Grid item>
            <Title>{titleIdentity}</Title>
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            id="email"
            label="E-mail"
            type="email"
            variant="standard"
            margin="normal"
            fullWidth
            required
            {...register("email")}
            style={{ marginBottom: "16px" }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            label="Senha"
            variant="standard"
            margin="normal"
            type="password"
            fullWidth
            required
            {...register("password")}
            style={{ marginBottom: "16px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(event) => {
                      event.preventDefault();
                    }}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="confirmPassword"
            label="Confirmar senha"
            variant="standard"
            fullWidth
            required
            type="password"
            margin="normal"
            {...register("confirmPassword")}
            style={{ marginBottom: "16px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(event) => {
                      event.preventDefault();
                    }}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        {showPasswordRequirements && (
          <Stack direction="column" color={ACCESSIBILITY_ERROR}>
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
