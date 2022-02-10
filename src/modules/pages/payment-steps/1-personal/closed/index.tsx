import { Grid } from "@mui/material";
import PersonIconSVG from "../../../../../assets/img/payment/icon-person-card.svg";

import {
  CardPersonalClosed,
  PersonIcon,
  TitleRegistration,
  PersonData,
} from "./styles";

const PersonalStepClosed = () => {
  const titlePersonal = "Dados Pessoais";
  const subTitle = "Aguardando o preenchimento dos dados";

  return (
    <CardPersonalClosed container direction="column">
      <PersonIcon container direction="row">
        <Grid item>
          <img src={PersonIconSVG} alt="IconPerson" />
        </Grid>
        <Grid item>
          <TitleRegistration>{titlePersonal}</TitleRegistration>
        </Grid>
      </PersonIcon>
      <PersonData item>{subTitle}</PersonData>
    </CardPersonalClosed>
  );
};

export default PersonalStepClosed;
