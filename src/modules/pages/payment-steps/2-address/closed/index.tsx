import { Grid } from "@mui/material";
import AddressIconSVG from "../../../../../assets/img/payment/icon-address-card.svg";

import {
  CardAddressClosed,
  AddressIcon,
  TitleAddress,
  WaitMsg,
} from "./styles";

const AddressStepClosed = () => {
  return (
    <CardAddressClosed container item direction="column">
      <AddressIcon container direction="row">
        <Grid item>
          <img src={AddressIconSVG} alt="IconAddress" />
        </Grid>
        <Grid item>
          <TitleAddress>Dados de Endereço</TitleAddress>
        </Grid>
      </AddressIcon>
      <WaitMsg>Aguardando o preenchimento dos dados</WaitMsg>
    </CardAddressClosed>
  );
};

export default AddressStepClosed;
