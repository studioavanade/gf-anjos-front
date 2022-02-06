import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import RegistrationIconSVG from "../../../../assets/img/personal-information/registration-icon.svg";
import PersonIconSVG from "../../../../assets/img/personal-information/person-icon.svg";
import ButtonIncrementSVG from "../../../../assets/img/personal-information/button-increment.svg";
import ButtonDecrementSVG from "../../../../assets/img/personal-information/button-descrement.svg";

import {
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
  PersonTypePaper,
  TextFieldTargetDonators,
} from "./styles";

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
} from "@mui/material";

import { PersonType } from "../../../../store/shared";
import { SCHOOLING } from "../../../../constants/";
import { showErrorToast } from "../../../../utils/toast/";
import { IAmbassador } from "../../../../store/ambassador/types";
import { IApplicationState } from "../../../../store/rootReducer";
import { isCNPJValid, isCPFValid } from "../../../../utils";
import { saveFormTargetDonators } from "../../../../store/campaign/actions";
import {
  clearAmbassadorState,
  createAmbassador,
  getAmbassador,
  updateAmbassador,
} from "./../../../../store/ambassador/actions";
import PrivateComponentVerifier from "../../../components/private-component-verifier";
import BackgroundWithHeader from "../../../components/background-with-header/";
import ROUTING_PATHS from "../../../../routes/paths";
import { setLoading } from "../../../../store/loading-progress/actions";
import MainContainer from "../../../components/main-container";
import {
  SuitCaseIcon,
  PersonIcon as PersonTypeIcon,
} from "../../../../assets/img";

const PersonalInformation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [targetDonators, setTargetDonators] = useState(0);
  const [personType, setPersonType] = useState(PersonType.NATURAL_PERSON);
  const [education, setEducation] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  const authEmail = useSelector(
    (state: IApplicationState) => state.auth.userEmail
  );

  const ambassadorState = useSelector(
    (state: IApplicationState) => state.ambassador
  );

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const { name, cpfCnpj, birthDate, profession, phone, celPhone } = data;

    const [firstName, lastName] = name.split(" ");

    if (!lastName) {
      showErrorToast("Necessário inserir pelo menos 1 sobrenome.");
      return;
    } else if (!authEmail || authEmail.length < 1) {
      showErrorToast("Necessário estar autenticado.");
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
      email: authEmail,
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

    dispatch(setLoading());

    if (!isEditMode) {
      dispatch(
        createAmbassador(ambassador, () => {
          dispatch(saveFormTargetDonators(Number(targetDonators)));
          navigate(ROUTING_PATHS.PhotoUpload);
        })
      );
    } else {
      //dispatch(updateAmbassador(ambassador));
    }
  };

  const handleChangePersonType = (event: any) => {
    setPersonType(event.target.value);
  };

  const handleChangeSChooling = (event: any) => {
    setEducation(event.target.value);
  };

  const showErrorAndMavigateDelyaed = (
    msg: string,
    delay: number,
    to: string
  ) => {
    showErrorToast(msg);
    setTimeout(() => {
      navigate(to);
    }, delay);
  };

  useEffect(() => {
    if (isEditMode) return;

    if (ambassadorState.isEditting && authEmail && authEmail.length > 0) {
      setIsEditMode(true);
      dispatch(setLoading());
      dispatch(getAmbassador("", authEmail));
    }
    // return () => {
    //   dispatch(clearAmbassadorState());
    // };
  }, [ambassadorState.isEditting, authEmail]);

  useEffect(() => {
    if (ambassadorState.error && ambassadorState.isEditting) {
      // showErrorAndMavigateDelyaed(
      //   "Erro para localizar embaixador.",
      //   3000,
      //   ROUTING_PATHS.AmbassadorLogin
      // );
    }
  }, [ambassadorState.error]);

  useEffect(() => {
    if (!ambassadorState && (!authEmail || authEmail.length < 1)) {
      showErrorAndMavigateDelyaed(
        "Crie uma conta ou entre para seguir com este cadastro. Redirecionando em 5s...",
        5000,
        ROUTING_PATHS.AmbassadorCreateAccount
      );
    }
  }, [ambassadorState.ambassador]);

  return (
    <BackgroundWithHeader>
      <MainContainer maxWidth="70vw">
        <Grid container justifyContent="center" alignItems="center">
          <PrivateComponentVerifier />
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyleCard>
              <RegistrationIcon>
                <img
                  src={RegistrationIconSVG}
                  alt="Icon"
                  width="35px"
                  height="32px"
                />
                <TitleRegistration>Faça seu cadastro</TitleRegistration>
              </RegistrationIcon>
              <CardPersonType
                container
                alignItems="center"
                justifyContent="center"
              >
                <GridNoPadding container item xs={12} justifyContent="center">
                  Nesta campanha que vai ser criada,
                  <PersonTypeText2> você é: </PersonTypeText2>
                </GridNoPadding>
                <GridNoPadding container item xs={12} direction="row">
                  <FormControl
                    component="fieldset"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <RadioGroupStyled
                      aria-label="personType"
                      value={personType}
                      onChange={handleChangePersonType}
                      style={{
                        padding: "16px",
                        backgroundColor: "#F7F7F7",
                        border: "1px solid #E5E5E5",
                        width: "100%",
                        justifyContent: "center",
                      }}
                    >
                      <PersonTypePaper>
                        <Grid
                          container
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          style={{ height: "100%" }}
                        >
                          <PersonTypeIcon color="grey" />
                          Pessoa Física
                          <FormControlLabel
                            value={PersonType.NATURAL_PERSON}
                            control={<Radio color="secondary" />}
                            style={{ width: "100%", justifyContent: "center" }}
                            label=""
                          />
                        </Grid>
                      </PersonTypePaper>

                      <PersonTypePaper>
                        <Grid
                          container
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <SuitCaseIcon color="grey" />
                          Pessoa Jurídica
                          <FormControlLabel
                            value={PersonType.LEGAL_PERSON}
                            control={<Radio color="secondary" />}
                            style={{ width: "100%", justifyContent: "center" }}
                            label=""
                          />
                        </Grid>
                      </PersonTypePaper>
                    </RadioGroupStyled>
                  </FormControl>
                </GridNoPadding>
              </CardPersonType>
              <RegistrationForm>
                <Grid
                  container
                  spacing={3}
                  style={{ margin: "-24px 0px 0px -24px" }}
                >
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="name"
                      label="Nome"
                      variant="standard"
                      required
                      {...register("name")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
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
                  <Grid item xs={12} md={6}>
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
                  <Grid item xs={12} md={6}>
                    <FormControl
                      fullWidth
                      variant="standard"
                      required
                      style={{ textAlign: "start" }}
                    >
                      <InputLabel>Escolaridade</InputLabel>
                      <Select
                        value={education}
                        onChange={handleChangeSChooling}
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
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      id="profession"
                      label="Profissão"
                      variant="standard"
                      required
                      {...register("profession")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
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
                  <Grid item xs={12} md={6}>
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
                  <TitleRecurring>Doadores Recorrentes</TitleRecurring>
                </StyleRecurringDonors>
                <SubTitleDonors>
                  Quantos doadores você deseja engajar?
                </SubTitleDonors>

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
                    <TextFieldTargetDonators
                      autoFocus
                      value={targetDonators}
                      onChange={(event: any) => {
                        const value = event.target.value;
                        if (Number(value) > 0) {
                          setTargetDonators(value);
                        } else {
                          setTargetDonators(0);
                        }
                      }}
                      type="number"
                    />
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
                    disabled={
                      !ambassadorState.ambassador ||
                      !ambassadorState.ambassador.email ||
                      ambassadorState.ambassador.email.length < 1
                    }
                  >
                    Cadastrar
                  </Button>
                </DivSubmitButton>
              </StyleDonors>
            </StyleCard>
          </form>
        </Grid>
      </MainContainer>
    </BackgroundWithHeader>
  );
};

export default PersonalInformation;
