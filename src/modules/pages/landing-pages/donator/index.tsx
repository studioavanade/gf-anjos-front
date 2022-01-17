import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PerfilSVG from "../../../../assets/img/landing-donation/perfil-donation.svg";
import BackgroundLastSVF from "../../../../assets/img/landing-donation/background-last.svg";
import IconMoneySVG from "../../../../assets/img/landing-donation/icon-money.svg";
import IconMoneyLargeSVG from "../../../../assets/img/landing-donation/icon-money-large.svg";

import DoughnutChart from "./donnut-chart";
import { Box, Button, Grid, IconButton } from "@mui/material";

import {
  TopContainerInfluencer,
  DonationValueCard,
  InfluencerProfile,
  InfluencerName,
  DonationTitle,
  DonationDescription,
  SubTitleAngel,
  StyleTitleRecurring,
  BoxTitleDonate,
  StyleMoneyIcon,
  StyleBoxTitleDonate,
  StyleBoxGoal,
  StyleCardGoal,
  StyleSubtitleDonation,
  StyleCardDonut,
  StyleTitleGoal,
  StyleTitleCollected,
  GFNetwork,
  DivSubmitButton,
  StyleBackgroundLast,
  StyleReal,
  StyleValue,
  StyleMonth,
  StyleTodayValue,
  StyleDonut,
  StyleBoxValue,
  StyleDonationMonth,
  CustomValueTextField,
} from "./styles";
import BackgroundWithHeader from "./../../../components/background-with-header/index";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  setDonationValue,
  clearStates,
} from "../../../../store/payment/actions";
import ROUTING_PATHS from "./../../../../routes/paths/index";
import { showErrorToast } from "./../../../../utils/toast/index";
import { SUBMIT_CUSTOM_VALUE } from "../../../../assets/img";

interface IValueCardProps {
  monthlyValue: number;
  color: string;
}

const LadingPageDonator = () => {
  const titleDonation = "VAMOS DOAR JUNTOS";
  const subTitleAngel =
    "Convido você para também ser o anjo que vai dar condições para que os moradores das favelas recebam o colar da imunidade.";
  const namePerfil = "Eduardo";
  const titleRecurring = "SEJA UM DOADOR RECORRENTE";
  const donationMonth = "Em doações mensais para nossa campanha";

  const isSmallerThan1200 = useMediaQuery("(max-width: 1200px)");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [customValue, setCustomValue] = useState<string>("");

  useEffect(() => {
    dispatch(clearStates());
  }, []);

  const donate = (value: string | number) => {
    let donation = Number(value.toString().replaceAll(",", "."));
    if (donation === undefined || donation <= 0) {
      showErrorToast("Valor de doação inválido.");
      return;
    }
    dispatch(setDonationValue(donation));
    navigate(ROUTING_PATHS.PaymentSteps);
  };

  const ValueCard = ({ monthlyValue, color }: IValueCardProps) => {
    const real = "R$";
    return (
      <DonationValueCard
        justifyContent="center"
        alignItems="center"
        onClick={() => {
          donate(monthlyValue);
        }}
        style={{ cursor: "pointer" }}
      >
        <StyleBoxTitleDonate>
          <StyleMoneyIcon
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Grid item xs={2}>
              <img src={IconMoneySVG} alt="IconMoney" />
            </Grid>
            <BoxTitleDonate xs={10}>
              {monthlyValue ? "Doe" : "Doe outro valor"}
            </BoxTitleDonate>
          </StyleMoneyIcon>
        </StyleBoxTitleDonate>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="row"
            style={{ color, width: "100%" }}
          >
            <StyleReal>{real}</StyleReal>
            <StyleValue>{monthlyValue || ""}</StyleValue>
          </Grid>
          <StyleMonth>POR MÊS</StyleMonth>

          <StyleTodayValue>{`Apenas ${real} ${(monthlyValue / 30).toFixed(
            2
          )} por dia`}</StyleTodayValue>
        </Grid>
      </DonationValueCard>
    );
  };

  return (
    <BackgroundWithHeader bg="darkblue">
      <TopContainerInfluencer>
        <Grid container justifyContent="center" direction="row">
          <InfluencerProfile
            container
            item
            alignItems="center"
            justifyContent="center"
            direction="column"
            xs={12}
            lg={4}
          >
            <img src={PerfilSVG} alt="Perfil" />
            <InfluencerName>{namePerfil}</InfluencerName>
          </InfluencerProfile>

          <Grid
            container
            justifyContent={isSmallerThan1200 ? "center" : "flex-start"}
            xs={12}
            lg={8}
            style={isSmallerThan1200 ? undefined : { paddingLeft: "50px" }}
          >
            <DonationTitle>{titleDonation}</DonationTitle>
            <DonationDescription>
              Neste Reality Show da fome, que já eliminou 1900 brasileiros em um
              único paredão, a Rede Gerando Falcões será, de novo, a ponte que
              levará para as instituições da Rede, cestas básicas digitais, que
              serão distribuídas em suas favelas para as famílias em estado de
              vulnerabilidade, colocando o
              <span style={{ color: "#00AEEF" }}>
                <b> #InfluênciaDaBoa</b>
              </span>
              .
            </DonationDescription>
            <SubTitleAngel>{subTitleAngel}</SubTitleAngel>
          </Grid>
        </Grid>
      </TopContainerInfluencer>

      <StyleTitleRecurring
        container
        alignItems="center"
        justifyContent="center"
      >
        {titleRecurring}
      </StyleTitleRecurring>

      <Grid container justifyContent="space-around">
        <ValueCard monthlyValue={20} color="#F5821F" />
        <ValueCard monthlyValue={50} color="#EB1D68" />
        <ValueCard monthlyValue={100} color="#00AEEF" />

        <DonationValueCard>
          <StyleBoxTitleDonate>
            <StyleMoneyIcon
              container
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Grid item xs={2}>
                <img src={IconMoneySVG} alt="IconMoney" />
              </Grid>
              <BoxTitleDonate xs={10}>Doe outro valor</BoxTitleDonate>
            </StyleMoneyIcon>
          </StyleBoxTitleDonate>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="row"
            style={{ color: "#00B094", margin: "16px" }}
          >
            <StyleReal item xs={2}>
              R$
            </StyleReal>
            <StyleValue item xs={10}>
              <CustomValueTextField
                id="value"
                onChange={(event) => setCustomValue(event.target.value)}
                value={customValue}
                variant="standard"
                type="number"
                InputProps={{
                  endAdornment: (
                    <IconButton
                      style={{ width: "36px", height: "36px" }}
                      onClick={() => {
                        donate(customValue);
                      }}
                    >
                      <img
                        src={SUBMIT_CUSTOM_VALUE}
                        alt="Doação personalizada"
                        style={{ color: "black" }}
                      />
                    </IconButton>
                  ),
                }}
              />
            </StyleValue>
          </Grid>
        </DonationValueCard>
      </Grid>

      <Grid
        container
        justifyContent="space-around"
        style={{ paddingTop: "70px" }}
      >
        <Grid item xs={12} lg={6} direction="column">
          <StyleTitleGoal>Sua meta de doadores recorrentes</StyleTitleGoal>
          <Grid container item direction="column" alignItems="center">
            <StyleBoxGoal container alignItems="center" justifyContent="center">
              <StyleCardGoal>
                <StyleDonut>
                  <DoughnutChart width="150%" height="150%" />
                </StyleDonut>
              </StyleCardGoal>
              <StyleCardDonut>
                <StyleSubtitleDonation>
                  <b>310 de 500 </b> doadores já fizeram doações
                </StyleSubtitleDonation>
                <div style={{ fontFamily: "Inter Light" }}>
                  Faltam <b>190</b> doadores para atingir sua meta
                </div>
              </StyleCardDonut>
            </StyleBoxGoal>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={6} direction="column">
          <StyleTitleCollected>Já arrecadamos</StyleTitleCollected>
          <Grid container item direction="column" alignItems="center">
            <StyleBoxGoal
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <img src={IconMoneyLargeSVG} alt="IconMoney" />
              <StyleBoxValue
                container
                alignItems="center"
                justifyContent="center"
              >
                R$: 1.200,00
              </StyleBoxValue>
              <StyleDonationMonth>{donationMonth}</StyleDonationMonth>
            </StyleBoxGoal>
          </Grid>
        </Grid>
      </Grid>

      <GFNetwork>
        A Rede Gerando Falcões será, de novo, a ponte que levará para as
        instituições da Rede cestas básicas digitais que serão distribuídas em
        suas favelas para as famílias em estado de vulnerabilidade.
      </GFNetwork>
      <a
        href="https://www.youtube.com/watch?v=4xSAKGplFEw"
        target="_blank"
        rel="noreferrer"
        style={{ width: "100%", textAlign: "center", padding: "100px 10vw" }}
      >
        <DivSubmitButton variant="contained" type="submit">
          ASSISTA AO VÍDEO DA CAMPANHA
        </DivSubmitButton>
      </a>
      <StyleBackgroundLast>
        <img
          src={BackgroundLastSVF}
          alt="backgroundblue"
          width="100%"
          height="100%"
        />
      </StyleBackgroundLast>
    </BackgroundWithHeader>
  );
};

export default LadingPageDonator;
