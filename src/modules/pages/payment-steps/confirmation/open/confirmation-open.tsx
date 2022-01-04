import CheckIconSVG from "../../../../../assets/img/payment/icon-check-confirmation.svg";
import DownloadPdfSVG from "../../../../../assets/img/payment/icon-download-pdf.svg";

import { Link } from "@mui/material";

import {
  BoxCard,
  Centralization,
  TitleConfirmation,
  SubTitleConfirmation,
  CheckConfirmationIcon,
  BoxPayment,
  BoxStyle,
  DownloadStyle,
} from "./confirmation_styles";

const ConfirmationStepOpen = () => {
  
  const title = "OBRIGADO POR SUA DOAÇÃO";
  const subTitle =
    "Essa doação vai ajudar muitas pessoas, esse pequeno gesto faz uma grande diferença";
  const titlePayment = "Seu pagamento foi efetuado";
  const downloadPdf = "Baixar comprovante";

  return (
    <>
      <BoxCard>
        <Centralization>
          <CheckConfirmationIcon>
            <img src={CheckIconSVG} alt="IconCheck" />
          </CheckConfirmationIcon>
          <TitleConfirmation>{title}</TitleConfirmation>
          <SubTitleConfirmation>{subTitle}</SubTitleConfirmation>
          <BoxStyle>
            <BoxPayment>{titlePayment}</BoxPayment>
          </BoxStyle>
          <DownloadStyle>
            <img src={DownloadPdfSVG} alt="IconDownload" />
            <Link style={{ paddingLeft: "5px" }}>{downloadPdf}</Link>
          </DownloadStyle>
        </Centralization>
      </BoxCard>
    </>
  );
};

export default ConfirmationStepOpen;
