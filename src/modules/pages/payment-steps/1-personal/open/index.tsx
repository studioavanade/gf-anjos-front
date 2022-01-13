import PersonIconSVG from "../../../../../assets/img/payment/icon-person-card.svg";

import {
  CardPersonalOpen,
  PersonIcon,
  TitlePersonal,
  StyleCheckBox,
  DivSubmitButton,
  StyleTitleCheck,
} from "./styles";

import { Button, TextField, Checkbox, Grid } from "@mui/material";

const PersonalStepOpen = () => {
  const titlePersonal = "Dados Pessoais";
  const campaignCheck =
    "Desejo acompanhar a prestação de conta da campanha e informações sobre a Gerando Falcões";
  const acceptCommunication = "Eu aceito receber comunicações";
  const myDataInform =
    "Ao informar meus dados, eu concordo com a Politica de Privacidade e com os Termos de Uso";
  const buttonSaved = "Salvar e continuar";

  return (
    <form>
      <CardPersonalOpen item direction="column">
        <PersonIcon container item direction="row">
          <Grid item>
            <img src={PersonIconSVG} alt="IconPerson" />
          </Grid>
          <Grid item>
            <TitlePersonal>{titlePersonal}</TitlePersonal>
          </Grid>
        </PersonIcon>
        <Grid item>
          <TextField
            id="firstName"
            label="Nome"
            type="text"
            variant="standard"
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item>
          <TextField
            id="LastName"
            label="Último Nome"
            type="text"
            variant="standard"
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item>
          <TextField
            id="date"
            type="date"
            defaultValue="2017-05-24"
            label="Data de nascimento"
            sx={{ width: 390, marginTop: "25px" }}
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
        </Grid>
        <Grid item>
          <TextField
            id="cpf"
            label="CPF"
            placeholder="000.000.000-00"
            type="text"
            variant="standard"
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item>
          <TextField
            id="phone"
            label="Telefone"
            placeholder="(00) 0000-0000"
            variant="standard"
            style={{ width: "390px", margin: "3px" }}
          />
        </Grid>
        <StyleCheckBox>
          <StyleTitleCheck>
            <Checkbox />
            {campaignCheck}
          </StyleTitleCheck>
          <StyleTitleCheck>
            <Checkbox />
            {acceptCommunication}
          </StyleTitleCheck>
          <StyleTitleCheck>
            <Checkbox />
            {myDataInform}
          </StyleTitleCheck>
        </StyleCheckBox>
        <DivSubmitButton>
          <Button variant="contained" type="submit" fullWidth>
            {buttonSaved}
          </Button>
        </DivSubmitButton>
      </CardPersonalOpen>
    </form>
  );
};

export default PersonalStepOpen;
