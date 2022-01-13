import { Link } from "@mui/material";
import { CHECK_ICON, DOWNLOAD_PDF_ICON } from "../../../../assets/img";

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
  const title = "OBRIGADO POR SUA DOAÇÃO";
  const subTitle =
    "Essa doação vai ajudar muitas pessoas, esse pequeno gesto faz uma grande diferença";
  const titlePayment = "Seu pagamento foi efetuado";
  const downloadPdf = "Baixar comprovante";

  return (
    <BoxCard container justifyContent="center" alignItems="center">
      <CheckConfirmationIcon
        container
        justifyContent="center"
        alignItems="center"
      >
        <img src={CHECK_ICON} alt="IconCheck" />
      </CheckConfirmationIcon>
      <TitleConfirmation container justifyContent="center" alignItems="center">
        {title}
      </TitleConfirmation>
      <SubTitleConfirmation
        container
        justifyContent="center"
        alignItems="center"
      >
        {subTitle}
      </SubTitleConfirmation>
      <BoxStyle container justifyContent="center" alignItems="center">
        <BoxPayment>{titlePayment}</BoxPayment>
      </BoxStyle>
      <DownloadStyle container justifyContent="center" alignItems="center">
        <img src={DOWNLOAD_PDF_ICON} alt="IconDownload" />
        <Link style={{ paddingLeft: "5px" }}>{downloadPdf}</Link>
      </DownloadStyle>
    </BoxCard>
  );
};

export default ConfirmationStep;
