import PersonIconSVG from "../../../../../assets/img/payment/icon-person-card.svg";

import {
  CardPersonalClosed,
  PersonIcon,
  TitleRegistration,
  StyleLink,
  PersonDados,
} from "./personal-closed_styles";

import Link from "@mui/material/Link";

const PersonalStepClosed = () => {

 const titlePersonal = "Dados Pessoais";
 const subTitle = "Aguardando o preenchimento dos dados";


  return (
    <>
      <CardPersonalClosed>
        <PersonIcon>
          <img src={PersonIconSVG} alt="IconPerson" />
          <TitleRegistration>{titlePersonal}</TitleRegistration>
        </PersonIcon>
        <PersonDados>
          {subTitle}
        </PersonDados>
      </CardPersonalClosed>
    </>
  );
};

export default PersonalStepClosed;
