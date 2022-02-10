import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaymentIconSVG from "../../../../../assets/img/payment/icon-money-card.svg";
import { IconCreditCard, SecureEnviroment } from "../../../../../assets/img";

import {
  TextField,
  Select,
  SelectChangeEvent,
  Grid,
  MenuItem,
  Button,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import {
  TitlePayment,
  CardPaymentOpen,
  CardCredit,
  DivSubmitButton,
} from "./styles";
import {
  submitPaymentSuccess,
  submitPayment,
} from "../../../../../store/payment/actions";
import { IApplicationState } from "../../../../../store/rootReducer";
import {
  IPaymentForm,
  IPaymentInfo,
  IPaymentPayload,
} from "../../../../../store/payment/types";
import { showErrorToast } from "../../../../../utils/toast";
import {
  clearLoading,
  setLoading,
} from "../../../../../store/loading-progress/actions";

const PaymentStepOpen = () => {
  const [creditCardMonth, setCreditCardMonth] = useState("");
  const [creditCardYear, setCreditCardYear] = useState("");

  const dispatch = useDispatch();

  const paymentState = useSelector((state: IApplicationState) => state.payment);

  const { handleSubmit, register } = useForm();

  const handleChangeMonth = (event: SelectChangeEvent) => {
    setCreditCardMonth(event.target.value);
  };

  const handleChangeYear = (event: SelectChangeEvent) => {
    setCreditCardYear(event.target.value);
  };

  const onSubmit = (data: IPaymentForm) => {
    const { cardName, cardNumber, cvv } = data;

    if (!paymentState.donator || !paymentState.donator.id) {
      showErrorToast("Dados do doador não encontrados!");
      return;
    }

    const payment: IPaymentInfo = {
      value: paymentState.donationValue,
      card: {
        holder: cardName,
        number: cardNumber,
        csc: cvv,
        expiration: {
          month: creditCardMonth,
          year: creditCardYear,
        },
      },
    };

    const payload: IPaymentPayload = {
      campaignId: paymentState.campaignId,
      donator: paymentState.donator,
      payment,
    };

    dispatch(setLoading());
    dispatch(
      submitPayment(
        payload,
        () => {
          dispatch(submitPaymentSuccess());
          dispatch(clearLoading());
        },
        (errorMessage: any) => {
          showErrorToast(
            `Erro ao processar pagamento${
              errorMessage && errorMessage.length > 0 ? ": " + errorMessage : ""
            }`
          );
          dispatch(clearLoading());
        }
      )
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardPaymentOpen item direction="column">
        <Grid container item direction="row">
          <Grid item>
            <img src={PaymentIconSVG} alt="IconAddress" />
          </Grid>
          <Grid item>
            <TitlePayment>Pagamento</TitlePayment>
          </Grid>
        </Grid>
        <CardCredit
          container
          item
          direction="row"
          alignItems="center"
          spacing={3}
          style={{ marginTop: "32px !important", marginBottom: "32px" }}
        >
          <Grid item>
            <img src={IconCreditCard} alt="Credit Card" />
          </Grid>
          <Grid item>Cartão de Crédito</Grid>
        </CardCredit>
        <Grid item>
          <TextField
            id="cardName"
            label="Nome impresso no cartão"
            type="text"
            variant="standard"
            placeholder="Nome"
            fullWidth
            margin="normal"
            style={{ marginBottom: "32px" }}
            {...register("cardName")}
          />
        </Grid>
        <Grid item>
          <TextField
            id="cardNumber"
            label="Número do cartão"
            type="number"
            variant="standard"
            placeholder="Número do cartão"
            fullWidth
            margin="normal"
            style={{ marginBottom: "32px" }}
            {...register("cardNumber")}
          />
        </Grid>
        <Grid item>
          <TextField
            id="cvv"
            label="Código de Segurança (CVV)"
            type="text"
            variant="standard"
            placeholder="123"
            fullWidth
            margin="normal"
            style={{ marginBottom: "64px" }}
            {...register("cvv")}
          />
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6} style={{ paddingRight: "24px" }}>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="valid">Validade Mês</InputLabel>
              <Select
                variant="standard"
                onChange={handleChangeMonth}
                value={creditCardMonth}
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map(
                  (n: number) => {
                    return (
                      <MenuItem value={n} key={n}>
                        {n.toString(10)}
                      </MenuItem>
                    );
                  }
                )}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="valid">Ano</InputLabel>
              <Select
                variant="standard"
                onChange={handleChangeYear}
                value={creditCardYear}
              >
                {Array.from(
                  { length: new Date().getFullYear() + 20 },
                  (_, i) => i + new Date().getFullYear()
                )
                  .filter((n: number) => n <= new Date().getFullYear() + 20)
                  .map((n: number) => {
                    return (
                      <MenuItem value={n} key={n}>
                        {n.toString(10)}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <DivSubmitButton>
          <Button variant="contained" type="submit" fullWidth>
            Finalizar doação
          </Button>
        </DivSubmitButton>

        <Grid
          container
          item
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          style={{ paddingTop: "8px" }}
        >
          <Grid item>Ambiente seguro</Grid>
          <Grid item>
            <img src={SecureEnviroment} alt="Cadeado" />
          </Grid>
        </Grid>
      </CardPaymentOpen>
    </form>
  );
};

export default PaymentStepOpen;
