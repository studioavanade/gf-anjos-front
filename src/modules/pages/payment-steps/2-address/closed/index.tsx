import { Grid } from "@mui/material";
import AddressIconSVG from "../../../../../assets/img/payment/icon-address-card.svg";

import {
  CardAddressClosed,
  AddressIcon,
  TitleAddress,
  AddressDados,
} from "./styles";

const AddressStepClosed = () => {
  const titleAddress = "Dados de Endereço";
  const subTitle = "Aguardando o preenchimento dos dados";

  return (
    <CardAddressClosed item direction="column">
      <AddressIcon container direction="row" spacing={3}>
        <Grid item>
          <img src={AddressIconSVG} alt="IconAddress" />
        </Grid>
        <Grid item>
          <TitleAddress>{titleAddress}</TitleAddress>
        </Grid>
      </AddressIcon>
      <AddressDados>{subTitle}</AddressDados>
    </CardAddressClosed>
  );
};

export default AddressStepClosed;
