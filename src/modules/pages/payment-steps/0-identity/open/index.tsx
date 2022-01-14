import EnvelopeIconSVG from "../../../../../assets/img/payment/icon-envelope-card.svg";

import {
  Button,
  TextField,
  Grid,
  InputAdornment,
  IconButton,
  FilledInput,
} from "@mui/material";

import { ButtonContainer, CardIdentityOpen, Title } from "./styles";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

interface ISubmitData {
  email: string;
  password: string;
  passwordConfirmation: string;
}

const IdentityStepOpen = () => {
  const titleIdentity = "Identificação";
  const createAccount = "Criar Conta";

  const { handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: ISubmitData) => {
    const { email, password, passwordConfirmation } = data;
    console.log("email: ", email);
    console.log("password: ", password);
    console.log("passwordConfirmation: ", passwordConfirmation);
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
        <Grid container item>
          <TextField
            id="confirmPassword"
            label="Confirmar senha"
            variant="standard"
            fullWidth
            type="password"
            margin="normal"
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
