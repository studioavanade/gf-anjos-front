import { useState } from "react";

import HeaderInfluencer from "../../../../assets/img/personal-information/header-influenciador.svg";
import RegistrationIconSVG from "../../../../assets/img/personal-information/registration-icon.svg";
import PersonIconSVG from "../../../../assets/img/personal-information/person-icon.svg";
import ButtonIncrementSVG from "../../../../assets/img/personal-information/button-increment.svg";
import ButtonDecrementSVG from "../../../../assets/img/personal-information/button-descrement.svg";

import {
  Body,
  Topo,
  BoxCard,
  StyleCard,
  RegistrationIcon,
  TitleRegistration,
  StyleCardCheckbox,
  CheckboxOptions,
  StyleTitleYouIs,
  StyleRadioCheckbox,
  StyleCampaign,
  RegistrationForm,
  StyleRecurringDonors,
  TitleRecurring,
  PersonIcon,
  SubTitleDonors,
  StyleDonors,
  StyleCountDonors,
  StyleButtonsDonors,
  ButtonIncremented,
  ButtonDecremented,
  StyleCardCount,
  ButtonStyled,
} from "./personal-information_styles";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { TextField, Button } from "@mui/material";

const PersonalInformation = () => {
  const [count, setCount] = useState(0);

  const title = "Faça seu cadastro";
  const titleCheckbox = "Nesta campanha que vai ser criada, ";
  const titleYouIs = "você é: ";
  const titleRecurringDonors = "Doadores Recorrentes";
  const subTitle = "Quantos doadores você deseja engajar?";
  const buttonRegister = "Cadastrar";

  return (
    <>
      <Body>
        <Topo src={HeaderInfluencer} alt="Header-Influencer" />
        <BoxCard>
          <StyleCard>
            <RegistrationIcon>
              <img
                src={RegistrationIconSVG}
                alt="Icon"
                width="35px"
                height="32px"
              />
              <TitleRegistration>{title}</TitleRegistration>
            </RegistrationIcon>
            <StyleCardCheckbox>
              <CheckboxOptions>
                <StyleCampaign>{titleCheckbox}</StyleCampaign>{" "}
                <StyleTitleYouIs>{titleYouIs}</StyleTitleYouIs>
                <StyleRadioCheckbox>
                  <FormControl component="fieldset">
                    <RadioGroup
                      style={{ paddingLeft: "15px" }}
                      row
                      aria-label="person"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="pessoaFisica"
                        control={<Radio color="secondary" />}
                        label="Pessoa Física"
                      />
                      <FormControlLabel
                        value="pessoaJuridica"
                        control={<Radio color="secondary" />}
                        label="Pessoa Jurídica"
                      />
                    </RadioGroup>
                  </FormControl>
                </StyleRadioCheckbox>
              </CheckboxOptions>
            </StyleCardCheckbox>
            <RegistrationForm>
              <form>
                <TextField
                  id="name"
                  label="Nome"
                  variant="standard"
                  style={{ width: "615px", margin: "3px" }}
                />
                <TextField
                  id="date"
                  type="date"
                  defaultValue="2017-05-24"
                  label="Data de nascimento"
                  sx={{ width: 296, margin: "3px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                />
                <TextField
                  id="schooling"
                  label="Escolaridade"
                  variant="standard"
                  style={{ width: "455px", margin: "3px" }}
                />
                <TextField
                  id="profission"
                  label="Profissão"
                  variant="standard"
                  style={{ width: "455px", margin: "3px" }}
                />
                <TextField
                  id="phone"
                  label="Telefone"
                  placeholder="(00) 0000-0000"
                  variant="standard"
                  style={{ width: "455px", margin: "3px" }}
                />
                <TextField
                  id="smartphone"
                  label="Celular"
                  placeholder="(00) 00000-0000"
                  variant="standard"
                  fullWidth
                  style={{ width: "455px", margin: "3px" }}
                />
                <TextField
                  id="email"
                  label="E-mail"
                  variant="standard"
                  margin="normal"
                  style={{ width: "916px" }}
                />
              </form>
            </RegistrationForm>
            <StyleDonors>
              <StyleRecurringDonors>
                <PersonIcon>
                  <img src={PersonIconSVG} alt="Person" />
                </PersonIcon>
                <TitleRecurring>{titleRecurringDonors}</TitleRecurring>
              </StyleRecurringDonors>
              <SubTitleDonors>{subTitle}</SubTitleDonors>
              <StyleCountDonors>
                <StyleButtonsDonors>
                  <ButtonDecremented onClick={() => setCount(count - 1)}>
                    <img src={ButtonDecrementSVG} alt="ButtonDescrement" />
                  </ButtonDecremented>
                  <StyleCardCount>{count}</StyleCardCount>
                  <ButtonIncremented onClick={() => setCount(count + 1)}>
                    <img src={ButtonIncrementSVG} alt="ButtonIcrement" />
                  </ButtonIncremented>
                </StyleButtonsDonors>
              </StyleCountDonors>
              <ButtonStyled>
                <Button
                  variant="contained"
                  type="submit"
                  style={{
                    backgroundColor: "#04C6FB",
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: "16px",
                    width: "450px",
                  }}
                  fullWidth
                >
                  {buttonRegister}
                </Button>
              </ButtonStyled>
            </StyleDonors>
          </StyleCard>
        </BoxCard>
      </Body>
    </>
  );
};

export default PersonalInformation;
