import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import HeaderInfluencer from "../../../assets/img/email/header-influenciador.svg";
import { Button, TextField, Paper, Box, Grid } from "@mui/material";
import { Topo, TitleLogin, DivSubmitButton, LoginLink } from "./styles";
import { signIn } from "../../../store/auth/actions";
import ROUTING_PATHS from "./../../../routes/paths/index";

const AmbassadorLogin = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const title = "LOGIN";
  const buttonContinue = "Entrar";
  const buttonCreateAccount = "Criar conta";

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const { email, password } = data;

    dispatch(
      signIn(email, password, navigate, ROUTING_PATHS.PersonalInformations)
    );
  };

  return (
    <>
      <Grid container xs={12}>
        <Topo>
          <img src={HeaderInfluencer} alt="Header" width="100%" />
        </Topo>
        <Grid container justifyContent="center">
          <Paper
            elevation={12}
            style={{ position: "relative",
            left: "0px",
            top: "-70px"
             }}
          >
            <Box
              sx={{ width: 900, height: 450 }}
              justifyContent="center"
              display="flex"
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ width: "450px" }}
              >
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
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    style={{ marginBottom: "16px" }}
                  >
                    {buttonContinue}
                  </Button>
                </DivSubmitButton>
              </form>
            </Box>
            <LoginLink>
              <Link to={ROUTING_PATHS.AmbassadorCreateAccount}>
                {buttonCreateAccount}
              </Link>
            </LoginLink>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default AmbassadorLogin;
