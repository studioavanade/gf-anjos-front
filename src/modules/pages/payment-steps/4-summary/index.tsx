import DonationIconSVG from "../../../../assets/img/payment/icon-box-card.svg";

import { CardPersonalOpen, TitleSummary, ValueSummary } from "./styles";

import { Grid } from "@mui/material";
import { ApplicationState } from "./../../../../store/rootReducer";
import { useSelector } from "react-redux";

const DonationSummaryStep = () => {
  const donationValue = useSelector(
    (state: ApplicationState) => state.payment.donationValue
  );
  const titleSummary = "Resumo da doação:";
  const subtitleSummary = "Subtotal:";
  const totalSummary = "Total:";

  return (
    <CardPersonalOpen container item direction="column">
      <Grid container item direction="row" spacing={3}>
        <Grid item>
          <img src={DonationIconSVG} alt="IconAddress" />
        </Grid>
        <Grid item>
          <TitleSummary>{titleSummary}</TitleSummary>
        </Grid>
      </Grid>
      <TitleSummary item>{`${subtitleSummary} R$${donationValue.toFixed(
        2
      )}`}</TitleSummary>
      <ValueSummary item>
        <strong>{`${totalSummary} R$${donationValue.toFixed(2)}`}</strong>
      </ValueSummary>
    </CardPersonalOpen>
  );
};

export default DonationSummaryStep;
