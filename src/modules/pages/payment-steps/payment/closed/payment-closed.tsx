import PaymentIconSVG from "../../../../../assets/img/payment/icon-money-card.svg";

import {
  CardPaymentClosed,
  PaymentIcon,
  TitlePayment,
  PaymentDados,
} from "./payment-closed_styles";

const PaymentStepClosed = () => {
  const titlePayment = "Pagamento";
  const subTitle = "Aguardando o preenchimento dos dados";

  return (
    <>
      <CardPaymentClosed>
        <PaymentIcon>
          <img src={PaymentIconSVG} alt="IconAddress" />
          <TitlePayment>{titlePayment}</TitlePayment>
        </PaymentIcon>
        <PaymentDados>{subTitle}</PaymentDados>
      </CardPaymentClosed>
    </>
  );
};

export default PaymentStepClosed;
