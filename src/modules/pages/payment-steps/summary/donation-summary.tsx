import DonationIconSVG from "../../../../assets/img/payment/icon-box-card.svg";

import {
  CardPersonalOpen,
  DonationIcon,
  TitleSummary,
  DivSubmitButton,
} from "./summary_styles";

import { Button } from "@mui/material";

const DonationSummaryStep = () => {
  const titleSummary = "Resumo da doação:";
  const subtitleSummary = "Subtotal:";
  const totalSummary = "Total:";
  const buttonFinalized = "Finalizar Doação";

  return (
    <>
      <CardPersonalOpen>
        <DonationIcon>
          <img src={DonationIconSVG} alt="IconAddress" />
          <TitleSummary>{titleSummary}</TitleSummary>
        </DonationIcon>
        <div
          style={{
            fontFamily: "Roboto Regular",
            fontSize: "20px",
            paddingLeft: "15px",
          }}
        >
          {subtitleSummary}
        </div>
        <div
          style={{
            fontWeight: "bold",
            fontFamily: "Roboto Regular",
            fontSize: "24px",
            paddingTop: "10px",
            paddingLeft: "15px",
          }}
        >
          {totalSummary}
        </div>
      </CardPersonalOpen>
      <DivSubmitButton>
        <Button variant="contained" type="submit">
          {buttonFinalized}
        </Button>
      </DivSubmitButton>
    </>
  );
};

export default DonationSummaryStep;
