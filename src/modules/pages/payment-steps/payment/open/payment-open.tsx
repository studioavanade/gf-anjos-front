import * as React from "react";
import PaymentIconSVG from "../../../../../assets/img/payment/icon-money-card.svg";
import HouseIconSVG from "../../../../../assets/img/payment/icon-house-card.svg";

import { TextField, Select, SelectChangeEvent } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import {
  PaymentIcon,
  TitlePayment,
  CardPaymentOpen,
  CardCredit,
  TitleAddressInvoice,
  CardInvoiceAddress,
  HouseIcon,
} from "./payment-open_styles";

const PaymentStepOpen = (props: any) => {
  const titlePayment = "Pagamento";
  const creditCard = "Cartão de Crédito";
  const addressInvoice = "Endereço da fatura do cartão é ?";

  const [month, setMonth] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setMonth(event.target.value);
  };

  return (
    <>
      <CardPaymentOpen>
        <PaymentIcon>
          <img src={PaymentIconSVG} alt="IconAddress" />
          <TitlePayment>{titlePayment}</TitlePayment>
        </PaymentIcon>
        <CardCredit>{creditCard}</CardCredit>
        <form
          style={{
            width: "390px",
            paddingLeft: "5px",
            paddingBottom: "35px",
          }}
        >
          <TextField
            id="nomenocartao"
            label="Nome impresso no cartão"
            type="text"
            variant="standard"
            placeholder="Nome"
            fullWidth
            margin="normal"
          />
          <TextField
            id="cardNumber"
            label="Número do cartão"
            type="text"
            variant="standard"
            placeholder="Número do cartão"
            fullWidth
            margin="normal"
          />
          <TextField
            id="codeSegurity"
            label="Código de Segurança / CVV"
            type="text"
            variant="standard"
            placeholder="CVV"
            fullWidth
            margin="normal"
          />
          <div style={{ display: "flex" }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
              <InputLabel id="valid">Validade Mês</InputLabel>
              <Select
                labelId="valid"
                id="valid"
                variant="standard"
                onChange={handleChange}
                value={month}
                fullWidth
              />
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
              <InputLabel id="valid">Ano</InputLabel>
              <Select
                labelId="valid"
                id="valid"
                variant="standard"
                onChange={handleChange}
                value={month}
                fullWidth
              />
            </FormControl>
          </div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 380 }}>
            <InputLabel id="valid">Parcelamento</InputLabel>
            <Select
              labelId="valid"
              id="valid"
              variant="standard"
              onChange={handleChange}
              value={month}
              fullWidth
            />
          </FormControl>
        </form>
        <TitleAddressInvoice>{addressInvoice}</TitleAddressInvoice>
        <CardInvoiceAddress>
          <HouseIcon>
            <img src={HouseIconSVG} alt="HouseIcon" />
            informacoes dados
          </HouseIcon>
        </CardInvoiceAddress>
      </CardPaymentOpen>
    </>
  );
};

export default PaymentStepOpen;
