import PaymentIconSVG from "../../../../../assets/img/payment/icon-money-card.svg";

import {
  CardPaymentClosed,
  PaymentIcon,
  TitlePayment,
  PaymentData,
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
        <PaymentData>{subTitle}</PaymentData>
      </CardPaymentClosed>
    </>
  );
};

export default PaymentStepClosed;
