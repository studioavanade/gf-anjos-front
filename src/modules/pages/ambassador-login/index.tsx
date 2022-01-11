import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import HeaderInfluencer from "../../../assets/img/email/header-influenciador.svg";
import { Button, TextField } from "@mui/material";
import {
  RootContainer,
  Topo,
  BoxCard,
  StyleCard,
  TitleLogin,
  DivSubmitButton,
  LoginLink,
} from "./styles";
import { signIn } from "../../../store/auth/actions";
import ROUTING_PATHS from "./../../../routes/paths/index";

const AmbassadorLogin = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const title = "LOGIN";
  const buttonContinue = "Entrar";

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const { email, password } = data;

    dispatch(
      signIn(email, password, navigate, ROUTING_PATHS.PersonalInformations)
    );
  };

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
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "450px" }}>
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
          </StyleCard>
        </BoxCard>
        <LoginLink>
          <Link to={ROUTING_PATHS.AmbassadorCreateAccount}>Criar conta</Link>
        </LoginLink>
      </RootContainer>
    </>
  );
};

export default AmbassadorLogin;
