import * as React from "react";
import PaymentIconSVG from "../../../../../assets/img/payment/icon-money-card.svg";
import { ICON_CREDIT_CARD } from "../../../../../assets/img";

import {
  TextField,
  Select,
  SelectChangeEvent,
  Grid,
  Radio,
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

const PaymentStepOpen = (props: any) => {
  const titlePayment = "Pagamento";
  const creditCard = "Cartão de Crédito";
  const buttonFinish = "Finalizar doação";

  const [creditCardMonth, setCreditCardMonth] = React.useState("");
  const [creditCardYear, setCreditCardYear] = React.useState("");

  const handleChangeMonth = (event: SelectChangeEvent) => {
    setCreditCardMonth(event.target.value);
  };

  const handleChangeYear = (event: SelectChangeEvent) => {
    setCreditCardYear(event.target.value);
  };

  return (
    <form>
      <CardPaymentOpen container item direction="column">
        <Grid container item direction="row" spacing={3}>
          <Grid item>
            <img src={PaymentIconSVG} alt="IconAddress" />
          </Grid>
          <Grid item>
            <TitlePayment>{titlePayment}</TitlePayment>
          </Grid>
        </Grid>
        <CardCredit
          container
          item
          direction="row"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <Radio checked />
          </Grid>
          <Grid item>
            <img src={ICON_CREDIT_CARD} alt="Credit Card" />
          </Grid>
          <Grid item>{creditCard}</Grid>
        </CardCredit>
        <Grid item>
          <TextField
            id="nomenocartao"
            label="Nome impresso no cartão"
            type="text"
            variant="standard"
            placeholder="Nome"
            fullWidth
            margin="normal"
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
          />
        </Grid>
        <Grid item>
          <TextField
            id="codeSegurity"
            label="Código de Segurança / CVV"
            type="text"
            variant="standard"
            placeholder="CVV"
            fullWidth
            margin="normal"
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
            {buttonFinish}
          </Button>
        </DivSubmitButton>
      </CardPaymentOpen>
    </form>
  );
};

export default PaymentStepOpen;
