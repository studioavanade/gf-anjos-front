import PersonIconSVG from "../../../../../assets/img/payment/icon-person-card.svg";

import {
  CardPersonalOpen,
  PersonIcon,
  TitlePersonal,
  StyleCheckBox,
  DivSubmitButton,
  StyleTitleCheck,
} from "./personal-open_styles";

import { Button, TextField, Checkbox } from "@mui/material";

const PersonalStepOpen = () => {

  const titlePersonal = "Dados Pessoais";
  const campaignCheck = "Desejo acompanhar a prestação de conta da campanha e informações sobre a Gerando Falcões";
  const acceptCommunication = "Eu aceito receber comunicações";
  const myDataInform = "Ao informar meus dados, eu concordo com a Politica de Privacidade e com os Termos de Uso";
  const buttonSaved = "Salvar e continuar";

  return (
    <>
      <CardPersonalOpen>
        <PersonIcon>
          <img src={PersonIconSVG} alt="IconPerson" />
          <TitlePersonal>{titlePersonal}</TitlePersonal>
        </PersonIcon>
        <form
          style={{ width: "390px", paddingLeft: "5px", paddingBottom: "30px" }}
        >
          <TextField
            id="firstName"
            label="Nome"
            type="text"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="LastName"
            label="Último Nome"
            type="text"
            variant="standard"
            fullWidth
            margin="normal"
          />
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
          <TextField
            id="cpf"
            label="CPF"
            placeholder="000.000.000-00"
            type="text"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="phone"
            label="Telefone"
            placeholder="(00) 0000-0000"
            variant="standard"
            style={{ width: "390px", margin: "3px" }}
          />
        </form>
        <StyleCheckBox>
          <StyleTitleCheck>
            <Checkbox></Checkbox>
            {campaignCheck}
          </StyleTitleCheck>
          <Checkbox /> 
          <StyleTitleCheck>{acceptCommunication}</StyleTitleCheck>
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
    </>
  );
};

export default PersonalStepOpen;
