import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import PaymentIconSVG from "../../../../../assets/img/payment/icon-money-card.svg";
import { ICON_CREDIT_CARD, SECURE_ENVIROMENT } from "../../../../../assets/img";

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
import { submitPaymentSuccess } from "../../../../../store/payment/actions";

const PaymentStepOpen = () => {
  const [creditCardMonth, setCreditCardMonth] = useState("");
  const [creditCardYear, setCreditCardYear] = useState("");

  const dispatch = useDispatch();

  const { handleSubmit, register } = useForm();

  const handleChangeMonth = (event: SelectChangeEvent) => {
    setCreditCardMonth(event.target.value);
  };

  const handleChangeYear = (event: SelectChangeEvent) => {
    setCreditCardYear(event.target.value);
  };

  const onSubmit = (data: any) => {
    dispatch(submitPaymentSuccess());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardPaymentOpen item direction="column">
        <Grid container item direction="row" spacing={3}>
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
          style={{ marginBottom: "32px" }}
        >
          <Grid item>
            <img src={ICON_CREDIT_CARD} alt="Credit Card" />
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
            type="text"
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
        <Grid container item direction="row" spacing={3}>
          <Grid item xs={6}>
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
          spacing={3}
          justifyContent="flex-end"
          alignItems="center"
          style={{ paddingTop: "8px" }}
        >
          <Grid item>Ambiente seguro</Grid>
          <Grid item>
            <img src={SECURE_ENVIROMENT} alt="Cadeado" />
          </Grid>
        </Grid>
      </CardPaymentOpen>
    </form>
  );
};

export default PaymentStepOpen;
