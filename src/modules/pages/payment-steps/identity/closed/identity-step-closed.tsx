
import EnvelopeIconSVG from "../../../../../assets/img/payment/icon-envelope-card.svg";

import Link from '@mui/material/Link';

import { CardIdentityClosed, EnvelopeIcon, TitleIdentity, StyleLink, Email } from "./identity-step-closed_styles";


const IdentityStepClosed = (props: any) => {

  return <>
  
  <CardIdentityClosed>
          <EnvelopeIcon>
              <img src={EnvelopeIconSVG} alt="IconEnvelope" />
            <TitleIdentity>
                {props.titleIdentity}
                </TitleIdentity>
                <StyleLink>
                <Link href="#">{props.alteredDados}</Link>
                </StyleLink>
                </EnvelopeIcon>
                <Email>{props.personEmail}</Email>
          </CardIdentityClosed>
  
  </>;
};

export default IdentityStepClosed;
