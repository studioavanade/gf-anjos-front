import { useEffect, useState } from "react";

import HeaderInfluencer from "../../../../assets/img/personal-information/header-influenciador.svg";
import RegistrationIconSVG from "../../../../assets/img/personal-information/registration-icon.svg";
import PersonIconSVG from "../../../../assets/img/personal-information/person-icon.svg";
import ButtonIncrementSVG from "../../../../assets/img/personal-information/button-increment.svg";
import ButtonDecrementSVG from "../../../../assets/img/personal-information/button-descrement.svg";

import {
  Topo,
  StyleCard,
  RegistrationIcon,
  TitleRegistration,
  CardPersonType,
  PersonTypeText2,
  RadioGroupStyled,
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
  DivSubmitButton,
  GridNoPadding,
} from "./style";

import {
  TextField,
  Button,
  Radio,
  FormControlLabel,
  FormControl,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { PersonType } from "../../../../store/shared";
import { SCHOOLING } from "./../../../../constants/index";
import { showErrorToast } from "./../../../../utils/toast/index";
import { IAmbassador } from "../../../../store/ambassador/types";
import { ApplicationState } from "./../../../../store/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { isCNPJValid, isCPFValid } from "../../../../utils";
import { saveFormTargetDonators } from "../../../../store/campaign/actions";
import ROUTING_PATHS from "./../../../../routes/paths/index";
import { useNavigate } from "react-router-dom";
import { createAmbassador } from "./../../../../store/ambassador/actions";
import PrivateComponentVerifier from "../../../components/private-component-verifier";

const PersonalInformation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [targetDonators, setTargetDonators] = useState(0);
  const [personType, setPersonType] = useState(PersonType.NATURAL_PERSON);
  const [education, setEducation] = useState("");

  const ambassadorEmail = useSelector(
    (state: ApplicationState) => state.auth.userEmail
  );

  const ambassadorId = useSelector(
    (state: ApplicationState) => state.ambassador.ambassador?.id
  );

  const title = "Faça seu cadastro";
  const titleCheckbox = "Nesta campanha que vai ser criada, ";
  const titleYouAre = "você é: ";
  const titleRecurringDonors = "Doadores Recorrentes";
  const subTitle = "Quantos doadores você deseja engajar?";
  const buttonRegister = "Cadastrar";

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const { name, cpfCnpj, birthDate, profession, phone, celPhone } = data;

    const [firstName, lastName] = name.split(" ");

    console.log("personType: ", personType);

    if (!lastName) {
      showErrorToast("Necessário inserir pelo menos 1 sobrenome.");
      return;
    } else if (!ambassadorEmail || ambassadorEmail.length < 1) {
      showErrorToast("Embaixador precisa estar autenticado.");
      return;
    }

    if (personType == PersonType.NATURAL_PERSON) {
      if (!isCPFValid(cpfCnpj)) {
        showErrorToast("CPF inválido.");
        return;
      }
    } else {
      if (!isCNPJValid(cpfCnpj)) {
        showErrorToast("CNPJ inválido.");
        return;
      }
    }

    if (targetDonators === 0) {
      showErrorToast(
        "Necessário ter pelo menos 1 doador recorrente como meta."
      );
      return;
    }

    const ambassador: IAmbassador = {
      email: ambassadorEmail,
      name: firstName,
      lastName,
      cpfCnpj,
      birthDate,
      education,
      profession,
      phone,
      celPhone,
      personType,
    };
    dispatch(createAmbassador(ambassador));
  };

  useEffect(() => {
    if (ambassadorId && ambassadorId.length > 0) {
      dispatch(saveFormTargetDonators(targetDonators));
      //navigate(ROUTING_PATHS.PhotoUpload);
    }
  }, [ambassadorId]);

  const handleChangePersonType = (event: any) => {
    setPersonType(event.target.value);
  };

  const handleChangeSChooling = (event: any) => {
    setEducation(event.target.value);
  };

  return (
    <>
      <PrivateComponentVerifier />
      <Grid container justifyContent="center">
        <Topo>
          <img src={HeaderInfluencer} alt="Header" width="100%" />
        </Topo>
        <Paper
          elevation={12}
          style={{ position: "relative",
          top: "-70px",
          width: "1300px"
           }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
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
              <CardPersonType
                container
                alignItems="center"
                justifyContent="center"
                spacing={0}
              >
                <GridNoPadding
                  container
                  item
                  xs={12}
                  sm={6}
                  justifyContent="flex-end"
                >
                  {titleCheckbox}{" "}
                  <PersonTypeText2>{titleYouAre}</PersonTypeText2>
                </GridNoPadding>
                <GridNoPadding container item xs={12} sm={6} direction="row">
                  <FormControl component="fieldset">
                    <RadioGroupStyled
                      aria-label="personType"
                      value={personType}
                      onChange={handleChangePersonType}
                    >
                      <FormControlLabel
                        value={PersonType.NATURAL_PERSON}
                        control={<Radio color="secondary" />}
                        label="Pessoa Física"
                      />
                      <FormControlLabel
                        value={PersonType.LEGAL_PERSON}
                        control={<Radio color="secondary" />}
                        label="Pessoa Jurídica"
                      />
                    </RadioGroupStyled>
                  </FormControl>
                </GridNoPadding>
              </CardPersonType>
              <RegistrationForm>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      id="name"
                      label="Nome"
                      variant="standard"
                      required
                      {...register("name")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      id="cpfCnpj"
                      label="CPF/CNPJ"
                      variant="standard"
                      required
                      type="number"
                      {...register("cpfCnpj")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      id="date"
                      type="date"
                      defaultValue="2017-05-24"
                      label="Data de nascimento"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                      required
                      {...register("birthDate")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="standard" required>
                      <InputLabel>Escolaridade</InputLabel>
                      <Select
                        value={education}
                        onChange={handleChangeSChooling}
                        autoWidth
                        label="Escolaridade"
                      >
                        <MenuItem value="">
                          <em>Nenhum</em>
                        </MenuItem>
                        {SCHOOLING.map((item) => (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="profession"
                      label="Profissão"
                      variant="standard"
                      required
                      {...register("profession")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="phone"
                      label="Telefone"
                      placeholder="(00) 0000-0000"
                      variant="standard"
                      type="number"
                      required
                      {...register("phone")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="smartphone"
                      label="Celular"
                      placeholder="(00) 00000-0000"
                      variant="standard"
                      type="number"
                      required
                      {...register("celPhone")}
                    />
                  </Grid>
                </Grid>
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
                    <ButtonDecremented
                      onClick={() => {
                        if (targetDonators > 0)
                          setTargetDonators(targetDonators - 1);
                      }}
                    >
                      <img src={ButtonDecrementSVG} alt="ButtonDescrement" />
                    </ButtonDecremented>
                    <StyleCardCount>{targetDonators}</StyleCardCount>
                    <ButtonIncremented
                      onClick={() => setTargetDonators(targetDonators + 1)}
                    >
                      <img src={ButtonIncrementSVG} alt="ButtonIcrement" />
                    </ButtonIncremented>
                  </StyleButtonsDonors>
                </StyleCountDonors>
                <DivSubmitButton>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    style={{ maxWidth: "320px" }}
                  >
                    {buttonRegister}
                  </Button>
                </DivSubmitButton>
              </StyleDonors>
            </StyleCard>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default PersonalInformation;
