import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import EnvelopeIconSVG from "../../../../../assets/img/payment/icon-envelope-card.svg";

import { Button, TextField, Grid } from "@mui/material";

import { ButtonContainer, CardIdentityOpen, Title } from "./styles";
import { ApplicationState } from "../../../../../store/rootReducer";
import {
  setDonatorEmail,
  setPaymentStep,
} from "../../../../../store/payment/actions";
import { isEmailValid } from "../../../../../utils";
import { showErrorToast } from "../../../../../utils/toast";

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

  const paymentState = useSelector(
    (state: ApplicationState) => state.payment.currentStep
  );

  const onSubmit = (data: ISubmitData) => {
    const { email } = data;

    if (!isEmailValid(email)) {
      showErrorToast("E-mail inválido!");
    }

    dispatch(setDonatorEmail(email));
    dispatch(setPaymentStep(paymentState + 1));
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
