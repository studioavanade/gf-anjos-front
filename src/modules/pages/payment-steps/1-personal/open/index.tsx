import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";
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
import { IDonatorPersonalDataForm } from "../../../../../store/payment/types";
import {
  setDonatorPersonalData,
  setPaymentStep,
} from "../../../../../store/payment/actions";
import { showErrorToast } from "./../../../../../utils/toast/index";
import { isCPFValid } from "../../../../../utils";
import { ApplicationState } from "./../../../../../store/rootReducer";

const PersonalStepOpen = () => {
  const titlePersonal = "Dados Pessoais";
  const acceptFollowCampaignReports =
    "Desejo acompanhar a prestação de conta da campanha e informações sobre a Gerando Falcões";
  const acceptCommunication = "Eu aceito receber comunicações";
  const acceptPrivacy =
    "Ao informar meus dados, eu concordo com a Politica de Privacidade e com os Termos de Uso";
  const buttonSaved = "Salvar e continuar";

  const dispatch = useDispatch();
  const paymentState = useSelector((state: ApplicationState) => state.payment);

  const { handleSubmit, register } = useForm();

  const [followAccountabilityReports, setFollowAccountabilityReports] =
    useState(false);
  const [allowCommunications, setAllowCommunications] = useState(false);
  const [allowPrivacyData, setAllowPrivacyData] = useState(false);

  const onSubmit = (data: any) => {
    const { firstName, lastName, birthDate, cpf, phone } = data;

    if (!isCPFValid(cpf)) {
      showErrorToast("CPF inválido!");
      return;
    } else if (Number(phone.length) !== 11) {
      showErrorToast("Telefone inválido!");
      return;
    }

    if (!allowPrivacyData) {
      showErrorToast("Aceite o termo de privacidade para continuar.");
      return;
    }

    let donator: IDonatorPersonalDataForm = {
      firstName,
      lastName,
      birthDate,
      cpf,
      phone,
      followAccountabilityReports,
      allowCommunications,
      allowPrivacyData,
    };
    dispatch(setDonatorPersonalData(donator));
    dispatch(setPaymentStep(paymentState.currentStep + 1));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardPersonalOpen item direction="column">
        <PersonIcon container item direction="row" spacing={3}>
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
            required
            {...register("firstName")}
            margin="normal"
            style={{ marginBottom: "16px" }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="lastName"
            label="Último Nome"
            type="text"
            variant="standard"
            fullWidth
            required
            margin="normal"
            {...register("lastName")}
            style={{ marginBottom: "16px" }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="birthDate"
            type="date"
            defaultValue="2017-05-24"
            label="Data de nascimento"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            required
            variant="standard"
            {...register("birthDate")}
            style={{ marginBottom: "16px" }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="cpf"
            label="CPF"
            placeholder="000.000.000-00"
            variant="standard"
            fullWidth
            required
            margin="normal"
            type="text"
            inputProps={{
              inputMode: "numeric",
              max: 99999999999,
            }}
            {...register("cpf")}
            style={{ marginBottom: "16px" }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="phone"
            label="Telefone"
            type="number"
            inputProps={{
              max: 99999999999,
            }}
            placeholder="(00) 0000-0000"
            variant="standard"
            margin="normal"
            fullWidth
            required
            {...register("phone")}
            style={{ marginBottom: "16px" }}
          />
        </Grid>
        <StyleCheckBox>
          <StyleTitleCheck style={{ marginBottom: "16px" }}>
            <Checkbox
              onChange={(e) => setFollowAccountabilityReports(e.target.checked)}
            />
            {acceptFollowCampaignReports}
          </StyleTitleCheck>
          <StyleTitleCheck style={{ marginBottom: "16px" }}>
            <Checkbox
              onChange={(e) => setAllowCommunications(e.target.checked)}
            />
            {acceptCommunication}
          </StyleTitleCheck>
          <StyleTitleCheck style={{ marginBottom: "16px" }}>
            <Checkbox onChange={(e) => setAllowPrivacyData(e.target.checked)} />
            {acceptPrivacy}
          </StyleTitleCheck>
        </StyleCheckBox>
        <DivSubmitButton style={{ paddingTop: "16px" }}>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            disabled={!allowPrivacyData}
          >
            {buttonSaved}
          </Button>
        </DivSubmitButton>
      </CardPersonalOpen>
    </form>
  );
};

export default PersonalStepOpen;
