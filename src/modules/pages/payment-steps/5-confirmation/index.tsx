import { Link } from "@mui/material";
import { CheckIcon, DOWNLOAD_PDF_ICON } from "../../../../assets/img";

import {
  BoxCard,
  TitleConfirmation,
  SubTitleConfirmation,
  CheckConfirmationIcon,
  BoxPayment,
  BoxStyle,
  DownloadStyle,
} from "./styles";

const ConfirmationStep = () => {
  return (
    <BoxCard container justifyContent="center" alignItems="center">
      <CheckConfirmationIcon
        container
        justifyContent="center"
        alignItems="center"
      >
        <CheckIcon />
      </CheckConfirmationIcon>
      <TitleConfirmation container justifyContent="center" alignItems="center">
        OBRIGADO POR SUA DOAÇÃO
      </TitleConfirmation>
      <SubTitleConfirmation
        container
        justifyContent="center"
        alignItems="center"
      >
        Essa doação vai ajudar muitas pessoas, esse pequeno gesto faz uma grande
        diferença
      </SubTitleConfirmation>
      <BoxStyle container justifyContent="center" alignItems="center">
        <BoxPayment>Seu pagamento foi efetuado</BoxPayment>
      </BoxStyle>
      <DownloadStyle container justifyContent="center" alignItems="center">
        <img src={DOWNLOAD_PDF_ICON} alt="IconDownload" />
        <Link style={{ paddingLeft: "5px" }}>Baixar comprovante</Link>
      </DownloadStyle>
    </BoxCard>
  );
};

export default ConfirmationStep;
