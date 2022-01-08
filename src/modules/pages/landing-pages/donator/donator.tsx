import HeaderSVG from "../../../../assets/img/landing-donation/header-influencer.svg";
import PerfilSVG from "../../../../assets/img/landing-donation/perfil-donation.svg";
import BackgroundConcessionSVG from "../../../../assets/img/landing-donation/background-blueligth.svg";
import BackgroundLastSVF from "../../../../assets/img/landing-donation/background-last.svg";
import IconMoneySVG from "../../../../assets/img/landing-donation/icon-money.svg";
import IconMoneyLargeSVG from "../../../../assets/img/landing-donation/icon-money-large.svg";
import IconStatusRemaining from "../../../../assets/img/landing-donation/icon-status-gray.svg";
import IconStatusHit from "../../../../assets/img/landing-donation/icon-status-colors.svg";

import { Button, Link } from "@mui/material";

import {
  HeaderInfluencer,
  RootContainer,
  BackgroundImg,
  BoxCentralizacion,
  InfluencerBox,
  StylePerfilAndText,
  StylePerfil,
  TitlePerson,
  StyleTitleDonation,
  StyleSubsTitleDonation,
  SubTitleAngel,
  StyleTitleRecurring,
  StyleCard,
  CardBox,
  BoxTitleDonate,
  StyleMoneyIcon,
  StyleBoxTitleDonate,
  StyleGoalAndCollected,
  StyleBoxGoal,
  StyleBoxCollected,
  StyleTitleGoal,
  StyleTitleCollected,
  StyleCentralizacion,
  StyleParsheNetwork,
  DivSubmitButton,
  StyleButton,
  StyleBackgroundLast,
  StyleCentralizacionValue,
  StyleReal,
  StyleValue,
  StyleMonth,
  StyleTodayValue,
  StyleDonut,
  StyleStatus,
  StyleStatusRamining,
  StyleStatusHit,
  CardBoxCollected,
  StyleMoneyLarge,
  StyleBoxValue,
  StyleDonationMonth,
} from "./donator_style";

const Donation = () => {
  const titleDonation = "VAMOS DOAR JUNTOS";
  const subTitle =
    "Neste Reality Show da fome, que já eliminou 1900 brasileiros em um único paredão, a Rede Gerando Falcões será, de novo, a ponte que levará para as instituições da Rede, cestas básicas digitais, que serão distribuídas em suas favelas para as famílias em estado de vulnerabilidade, colocando o #InfluênciaDaBoa.";
  const subTitleAngel =
    "Convido você para também ser o anjo que vai dar condições para que os moradores das favelas recebam o colar da imunidade.";
  const name = "Eduardo";
  const titleRecurring = "SEJA UM DOADOR RECORRENTE";
  const titleGoal = "Sua meta de doadores recorrentes";
  const statusTitleRemaining = "Restante";
  const statusTitleHit = "Atingido";
  const titleCollected = "Já arrecadamos";
  const donationMonth = "Em doações mensais para nossa campanha";
  const titleNetwork =
    "A Rede Gerando Falcões será, de novo, a ponte que levará para as instituições da Rede, cestas básicas digitais que serão distribuídas em suas favelas para as famílias em estado de vulnerabilidade.";
  const buttonWitch = "ASSISTA O VÍDEO DA CAMPANHA";
  const titleDonate = "Doe";
  const titleDonateAnotherValue = "Doe outro valor";
  const subTitleReal = "R$";
  const subTitleMonth = "POR MÊS";
  const subTitleTwenty = "Apenas R$ 0,66 por dia";
  const subTitleFiffty = "Apenas R$ 1,66 por dia";
  const subTitleHundred = "Apenas R$ 3,33 por dia";

  return (
    <>
      <RootContainer>
        <HeaderInfluencer>
          <img src={HeaderSVG} width="100%" alt="Header" />
        </HeaderInfluencer>
        <BackgroundImg>
          <img
            src={BackgroundConcessionSVG}
            alt="backgroundblue"
            width="100%"
            height="100%"
          />
        </BackgroundImg>
        <BoxCentralizacion>
          <InfluencerBox>
            <StylePerfilAndText>
              <StylePerfil>
                <img src={PerfilSVG} alt="Perfil" />
                <TitlePerson>{}</TitlePerson>
              </StylePerfil>
              <StyleTitleDonation>
                {titleDonation}
                <StyleSubsTitleDonation>{subTitle}</StyleSubsTitleDonation>
                <SubTitleAngel>{subTitleAngel}</SubTitleAngel>
              </StyleTitleDonation>
            </StylePerfilAndText>
          </InfluencerBox>
        </BoxCentralizacion>
        <StyleTitleRecurring>{titleRecurring}</StyleTitleRecurring>
        <StyleCard>
          <CardBox style={{ background: "#FFFF" }}>
            <StyleBoxTitleDonate>
              <StyleMoneyIcon>
                <img src={IconMoneySVG} alt="IconMoney" />
                <BoxTitleDonate> {titleDonate} </BoxTitleDonate>
              </StyleMoneyIcon>
            </StyleBoxTitleDonate>
            <StyleCentralizacionValue>
              <div style={{ display: "flex", color: "#F5821F" }}>
                <StyleReal>{subTitleReal}</StyleReal>
                <StyleValue>20</StyleValue>
              </div>
              <StyleMonth>{subTitleMonth}</StyleMonth>
              <StyleTodayValue>{subTitleTwenty}</StyleTodayValue>
            </StyleCentralizacionValue>
          </CardBox>
          <CardBox style={{ background: "#FFFF" }}>
            <StyleBoxTitleDonate>
              <StyleMoneyIcon>
                <img src={IconMoneySVG} alt="IconMoney" />
                <BoxTitleDonate> {titleDonate} </BoxTitleDonate>
              </StyleMoneyIcon>
            </StyleBoxTitleDonate>
            <StyleCentralizacionValue>
              <div style={{ display: "flex", color: "#EB1D68" }}>
                <StyleReal>{subTitleReal}</StyleReal>
                <StyleValue>20</StyleValue>
              </div>
              <StyleMonth>{subTitleMonth}</StyleMonth>
              <StyleTodayValue>{subTitleFiffty}</StyleTodayValue>
            </StyleCentralizacionValue>
          </CardBox>
          <CardBox style={{ background: "#FFFF" }}>
            <StyleBoxTitleDonate>
              <StyleMoneyIcon>
                <img src={IconMoneySVG} alt="IconMoney" />
                <BoxTitleDonate> {titleDonate} </BoxTitleDonate>
              </StyleMoneyIcon>
            </StyleBoxTitleDonate>
            <StyleCentralizacionValue>
              <div style={{ display: "flex", color: "#00AEEF" }}>
                <StyleReal>{subTitleReal}</StyleReal>
                <StyleValue>20</StyleValue>
              </div>
              <StyleMonth>{subTitleMonth}</StyleMonth>
              <StyleTodayValue>{subTitleHundred}</StyleTodayValue>
            </StyleCentralizacionValue>
          </CardBox>
          <CardBox style={{ background: "#FFFF" }}>
            <StyleBoxTitleDonate>
              <StyleMoneyIcon>
                <img src={IconMoneySVG} alt="IconMoney" />
                <BoxTitleDonate> {titleDonate} </BoxTitleDonate>
              </StyleMoneyIcon>
            </StyleBoxTitleDonate>
            <StyleCentralizacionValue>
              <div style={{ display: "flex", color: "#00B094" }}>
                <StyleReal>{subTitleReal}</StyleReal>
                <StyleValue>3000</StyleValue>
              </div>
              <StyleMonth>{subTitleMonth}</StyleMonth>
              <StyleTodayValue>{}</StyleTodayValue>
            </StyleCentralizacionValue>
          </CardBox>
        </StyleCard>
        <StyleGoalAndCollected>
          <div>
            <StyleTitleGoal>{titleGoal}</StyleTitleGoal>
            <div style={{display: "flex"}}>
            <StyleBoxGoal>
              <StyleDonut>donut</StyleDonut>
              <StyleStatus>
              <StyleStatusRamining>
                      <img src={IconStatusRemaining} alt="StatusRemaining" width="25px"/>
                      <StyleStatusRamining>{statusTitleRemaining}
                  </StyleStatusRamining>
                  </StyleStatusRamining>
                  <StyleStatusHit>
                      <img src={IconStatusHit} alt="StatusHit" width="25px" />
                      <StyleStatusHit>{statusTitleHit}</StyleStatusHit>
                  </StyleStatusHit>
              </StyleStatus>
              <div style={{display: "flex", flexDirection: "column", left: "-250,1px", position: "relative", top: "120px"}}>teste</div>
            </StyleBoxGoal>
            </div>
          </div>
          <div>
            <StyleTitleCollected>{titleCollected}</StyleTitleCollected>
            <StyleBoxCollected>
              <CardBoxCollected>
                <StyleMoneyLarge>
                  <img src={IconMoneyLargeSVG} alt="IconMoney" />
                </StyleMoneyLarge>
                <div style={{ paddingTop: "25px" }}>
                  <StyleBoxValue>R$: 1.200,00</StyleBoxValue>
                </div>
                <StyleDonationMonth>{donationMonth}</StyleDonationMonth>
              </CardBoxCollected>
            </StyleBoxCollected>
          </div>
        </StyleGoalAndCollected>
        <StyleCentralizacion>
          <StyleParsheNetwork>{titleNetwork}</StyleParsheNetwork>
        </StyleCentralizacion>
        <StyleBackgroundLast>
          <img
            src={BackgroundLastSVF}
            alt="backgroundblue"
            width="100%"
            height="100%"
          />
        </StyleBackgroundLast>
        <StyleButton>
          <DivSubmitButton>
            <Button
              href="https://www.youtube.com/watch?v=4xSAKGplFEw"
              variant="contained"
              type="submit"
              fullWidth
            >
              {buttonWitch}
            </Button>
          </DivSubmitButton>
        </StyleButton>
      </RootContainer>
    </>
  );
};

export default Donation;
