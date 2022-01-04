import PhotoUpload from "../ambassador-register/photo-upload/photo-upload";
import IdentityStepOpen from "../payment-steps/identity/open/identity-step-open";
import IdentityStepClosed from "../payment-steps/identity/closed/identity-step-closed";
import PersonalStepClosed from "../payment-steps/personal/closed/personal-closed";
import PersonalStepOpen from "../payment-steps/personal/open/personal-open";
import AddressStepClosed from "../payment-steps/address/closed/address-closed";
import AddressStepOpen from "../payment-steps/address/open/address-open";
import PaymentStepClosed from "../payment-steps/payment/closed/payment-closed";
import PaymentStepOpen from "../payment-steps/payment/open/payment-open";
import ConfirmationStepOpen from "../payment-steps/confirmation/open/confirmation-open";

import DonationSummaryStep from "../payment-steps/summary/donation-summary";

const Home = () => {
  return (
    <>
      {/* <PhotoUpload /> */}

      <IdentityStepOpen
        titleIdentity="Identificação"
        createCont="Criar Conta"
      />

      <IdentityStepClosed
        titleIdentity="Identificação"
        alteredDados="Alterar dados"
        personEmail="eduardo.lyra@email.com"
      />

      <PersonalStepClosed
        titlePersonal="Dados Pessoais"
        subTitle="Aguardando o preenchimento dos dados"
      />

      <PersonalStepOpen
        titlePersonal="Dados Pessoais"
        campanignCheck="Desejo acompanhar a prestação de conta da campanha e informações sobre a Gerando Falcões"
        acceptCommunication="Eu aceito receber comunicações"
        myDataInform="Ao informar meus dados, eu concordo com a Politica de Privacidade e com os Termos de Uso"
        buttonSaved="Salvar e continuar"
      />

      <AddressStepOpen
        titleAddress="Dados de Endereço"
        buttonSaved="Salvar e continuar"
        notKnowCep="Não sei meu CEP"
        address="Endereço"
      />

      <AddressStepClosed
        titleAddress="Dados de Endereço"
        subTitle="Aguardando o preenchimento dos dados"
      />

      <PaymentStepClosed
        titlePayment="Pagamento"
        subTitle="Aguardando o preenchimento dos dados"
      />

      {/* <PaymentStepOpen
        titlePayment="Pagamento"
        creditCard="Cartão de Crédito"
        addressInvoice = "Endereço da fatura do cartão é ?"
      /> */}
      <ConfirmationStepOpen
        title="OBRIGADO POR SUA DOAÇÃO"
        subTitle="Essa doação vai ajudar muitas pessoas, esse pequeno gesto faz uma grande diferença"
        titlePayment="Seu pagamento foi efetuado"
        downloadPdf="Baixar comprovante"
      />
      
      <DonationSummaryStep
        titleSummary="Resumo da doação:"
        subtitleSummary="Subtotal:"
        totalSummary="Total:"
        buttonFinalized="Finalizar Doação"
      />
    </>
  );
};

export default Home;
