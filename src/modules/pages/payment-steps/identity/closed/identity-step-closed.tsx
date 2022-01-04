
import EnvelopeIconSVG from "../../../../../assets/img/payment/icon-envelope-card.svg";

import Link from '@mui/material/Link';

import { CardIdentityClosed, EnvelopeIcon, TitleIdentity, StyleLink, Email } from "./identity-step-closed_styles";


const IdentityStepClosed = () => {

  const titleIdentity = "Identificação";
  const changeDataLabels = "Alterar dados";
  const personEmail = "eduardo.lyra@email.com";


  return <>
  
  <CardIdentityClosed>
          <EnvelopeIcon>
              <img src={EnvelopeIconSVG} alt="IconEnvelope" />
            <TitleIdentity>
                {titleIdentity}
                </TitleIdentity>
                <StyleLink>
                <Link href="#">{changeDataLabels}</Link>
                </StyleLink>
                </EnvelopeIcon>
                <Email>{personEmail}</Email>
          </CardIdentityClosed>
  
  </>;
};

export default IdentityStepClosed;
