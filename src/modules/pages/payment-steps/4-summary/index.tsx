import DonationIconSVG from "../../../../assets/img/payment/icon-box-card.svg";

import {
  CardPersonalOpen,
  TitleSummary,
  TotalText,
  SubtotalText,
} from "./styles";

import { Grid } from "@mui/material";
import { IApplicationState } from "./../../../../store/rootReducer";
import { useSelector } from "react-redux";

const DonationSummaryStep = () => {
  const donationValue = useSelector(
    (state: IApplicationState) => state.payment.donationValue
  );
  const titleSummary = "Resumo da doação:";
  const subtitleSummary = "Subtotal:";
  const totalSummary = "Total:";

  return (
    <CardPersonalOpen container item direction="column">
      <Grid container item direction="row">
        <Grid item>
          <img src={DonationIconSVG} alt="IconAddress" />
        </Grid>
        <Grid item>
          <TitleSummary>{titleSummary}</TitleSummary>
        </Grid>
      </Grid>
      <SubtotalText item>{`${subtitleSummary} R$${donationValue.toFixed(
        2
      )}`}</SubtotalText>
      <TotalText item>
        <strong>{`${totalSummary} R$${donationValue.toFixed(2)}`}</strong>
      </TotalText>
    </CardPersonalOpen>
  );
};

export default DonationSummaryStep;
