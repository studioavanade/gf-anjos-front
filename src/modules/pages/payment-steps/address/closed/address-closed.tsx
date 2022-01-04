import AddressIconSVG from "../../../../../assets/img/payment/icon-address-card.svg";


import { CardAddressClosed, AddressIcon, TitleAddress, StyleLink, AddressDados} from "./address-closed_styles";

import Link from "@mui/material/Link";

const AddressStepClosed = () => {
  const titleAddress = "Dados de Endereço";
 const subTitle = "Aguardando o preenchimento dos dados";

  return <>

  <CardAddressClosed>
        <AddressIcon>
          <img src={AddressIconSVG} alt="IconAddress" />
          <TitleAddress>{titleAddress}</TitleAddress>
        </AddressIcon>
        <AddressDados>
          {subTitle}
        </AddressDados>
      </CardAddressClosed>
  </>;
};

export default AddressStepClosed;
