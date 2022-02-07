import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { Button, TextField, Grid } from "@mui/material";
import { TitleLogin, DivSubmitButton, LoginLink, Form } from "./styles";
import { signIn, signOut } from "../../../store/auth/actions";
import ROUTING_PATHS from "./../../../routes/paths";
import BackgroundWithHeader from "./../../components/background-with-header/";
import MainContainer from "./../../components/main-container";
import {
  clearAmbassadorState,
  setIsEditting,
} from "../../../store/ambassador/actions";
import { clearCampaignState } from "../../../store/campaign/actions";

const AmbassadorLogin = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const title = "LOGIN";
  const buttonContinue = "Entrar";
  const buttonCreateAccount = "Criar conta";

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(signOut());
    dispatch(clearAmbassadorState());
    dispatch(clearCampaignState());
    dispatch(setIsEditting(false));
  }, [dispatch]);

  const onSubmit = (data: any) => {
    const { email, password } = data;

    dispatch(
      signIn(email, password, () => {
        dispatch(setIsEditting(true));
        navigate(ROUTING_PATHS.PersonalInformations);
      })
    );
  };

  return (
    <BackgroundWithHeader>
      <MainContainer maxWidth="70vw">
        <Grid container justifyContent="center" alignItems="center">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TitleLogin>{title}</TitleLogin>
            <TextField
              id="email"
              label="E-mail"
              type="email"
              variant="standard"
              fullWidth
              margin="normal"
              required
              {...register("email")}
            />
            <TextField
              id="password"
              label="Senha"
              variant="standard"
              fullWidth
              margin="normal"
              type="password"
              required
              {...register("password")}
            />
            <DivSubmitButton>
              <Button variant="contained" type="submit" fullWidth>
                {buttonContinue}
              </Button>
            </DivSubmitButton>
          </Form>
        </Grid>
        <LoginLink>
          <Link to={ROUTING_PATHS.AmbassadorCreateAccount}>
            {buttonCreateAccount}
          </Link>
        </LoginLink>
      </MainContainer>
    </BackgroundWithHeader>
  );
};

export default AmbassadorLogin;
