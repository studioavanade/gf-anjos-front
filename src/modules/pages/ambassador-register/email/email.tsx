import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
import { showErrorToast } from "./../../../../utils/toast/index";
import { useDispatch } from "react-redux";
import { createUser } from "../../../../store/auth/actions";

const BasicRegistration = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const titleEmail = "Cadastro";
  const buttonContinue = "Continuar";

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const { email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      showErrorToast("Senhas não correspondem!");
      return;
    }

    dispatch(createUser(email, password, navigate));
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
