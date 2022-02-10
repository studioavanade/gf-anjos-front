import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BackgroundLastSVF from "../../../../assets/img/landing-donation/background-last.svg";
import IconMoneySVG from "../../../../assets/img/landing-donation/icon-money.svg";
import IconMoneyLargeSVG from "../../../../assets/img/landing-donation/icon-money-large.svg";

import DoughnutChart from "./donnut-chart";
import { Grid, IconButton } from "@mui/material";

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
  DonationValueCardTitle,
  StyleBoxGoal,
  StyleCardGoal,
  StyleSubtitleDonation,
  StyleCardDonut,
  StyleTitleGoal,
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
  DonationCardsGrid,
} from "./styles";
import BackgroundWithHeader from "./../../../components/background-with-header/index";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  setDonationValueAndCampaignId,
  clearStates,
} from "../../../../store/payment/actions";
import ROUTING_PATHS from "./../../../../routes/paths/index";
import { showErrorToast } from "./../../../../utils/toast/index";
import { SubmiteCustomValue } from "../../../../assets/img";
import { getCampaign } from "./../../../../store/campaign/actions";
import { IApplicationState } from "./../../../../store/rootReducer";
import { IAmbassador } from "../../../../store/ambassador/types";

interface IValueCardProps {
  monthlyValue: number;
  color: string;
}

const LadingPageDonator = () => {
  const isSmallerThan1200 = useMediaQuery("(max-width: 1200px)");
  const [searchParams] = useSearchParams();
  const campaignState = useSelector(
    (state: IApplicationState) => state.campaign
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [customValue, setCustomValue] = useState<string>("");
  const [campaignId, setCampaignId] = useState<string | null | undefined>("");

  useEffect(() => {
    dispatch(clearStates());
    const id = searchParams.get("id");
    setCampaignId(id);
    console.log("id da campanha: ", id);
  }, []);

  useEffect(() => {
    if (campaignId && campaignId.length > 0) {
      dispatch(getCampaign(campaignId));
    }
  }, [campaignId]);

  useEffect(() => {
    if (campaignState.error) {
      showErrorToast("Não conseguimos localizar esta campanha...");
      navigate(ROUTING_PATHS.PageNotFound);
    }
  }, [campaignState, campaignState.error]);

  const donate = (value: string | number) => {
    let donation = Number(value.toString().replace(",", "."));
    if (donation === undefined || donation <= 0) {
      showErrorToast("Valor de doação inválido.");
      return;
    }

    if (!campaignId || (campaignId as string).length < 1) {
      showErrorToast("Campanha inválida.");
      return;
    }

    dispatch(setDonationValueAndCampaignId(donation, Number(campaignId)));
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
      >
        <DonationValueCardTitle>
          <StyleMoneyIcon
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Grid item xs={2}>
              <img src={IconMoneySVG} alt="IconMoney" />
            </Grid>
            <BoxTitleDonate item xs={10}>
              {monthlyValue ? "Doe" : "Doe outro valor"}
            </BoxTitleDonate>
          </StyleMoneyIcon>
        </DonationValueCardTitle>
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

  const geAmbassadortFullName = (ambassador: IAmbassador | undefined) => {
    if (ambassador) {
      if (ambassador.name && ambassador.lastName) {
        return `${ambassador.name} ${ambassador.lastName}`;
      }
    }
    return "";
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
            {campaignState.campaign?.pictureUrl && (
              <img
                src={campaignState.campaign?.pictureUrl}
                width="100%"
                alt="Perfil"
              />
            )}
            <InfluencerName>
              {geAmbassadortFullName(campaignState.campaign?.ambassador)}
            </InfluencerName>
          </InfluencerProfile>

          <Grid
            container
            item
            justifyContent={isSmallerThan1200 ? "center" : "flex-start"}
            xs={12}
            lg={8}
            style={
              isSmallerThan1200
                ? { marginTop: "50px" }
                : { paddingLeft: "50px" }
            }
          >
            <DonationTitle>VAMOS DOAR JUNTOS</DonationTitle>
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
            <SubTitleAngel>
              Convido você para também ser o anjo que vai dar condições para que
              os moradores das favelas recebam o colar da imunidade.
            </SubTitleAngel>
          </Grid>
        </Grid>
      </TopContainerInfluencer>

      <StyleTitleRecurring
        container
        alignItems="center"
        justifyContent="center"
      >
        SEJA UM DOADOR RECORRENTE
      </StyleTitleRecurring>

      <DonationCardsGrid>
        <ValueCard monthlyValue={20} color="#F5821F" />
        <ValueCard monthlyValue={50} color="#EB1D68" />
        <ValueCard monthlyValue={100} color="#00AEEF" />

        <DonationValueCard>
          <DonationValueCardTitle>
            <StyleMoneyIcon
              container
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Grid item xs={2}>
                <img src={IconMoneySVG} alt="IconMoney" />
              </Grid>
              <BoxTitleDonate item xs={10}>
                Doe outro valor
              </BoxTitleDonate>
            </StyleMoneyIcon>
          </DonationValueCardTitle>
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
                        src={SubmiteCustomValue}
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
      </DonationCardsGrid>

      <Grid container justifyContent="space-around">
        <Grid container item xs={12} lg={6} direction="column">
          <StyleTitleGoal container alignItems="center" justifyContent="center">
            Sua meta de doadores recorrentes
          </StyleTitleGoal>
          <Grid container item direction="column" alignItems="center">
            <StyleBoxGoal container alignItems="center" justifyContent="center">
              <StyleCardGoal>
                <StyleDonut>
                  <DoughnutChart
                    width="150%"
                    height="150%"
                    reached={campaignState.campaign?.numberOfDonators || 0}
                    left={
                      (campaignState.campaign?.targetDonators || 0) -
                      (campaignState.campaign?.numberOfDonators || 0)
                    }
                  />
                </StyleDonut>
              </StyleCardGoal>
              <StyleCardDonut>
                <StyleSubtitleDonation>
                  <b>
                    {campaignState.campaign?.numberOfDonators || 0} de{" "}
                    {campaignState.campaign?.targetDonators || 0}{" "}
                  </b>{" "}
                  doadores já fizeram doações
                </StyleSubtitleDonation>
                <div style={{ fontFamily: "Inter Light" }}>
                  Faltam{" "}
                  <b>
                    {(campaignState.campaign?.targetDonators || 0) -
                      (campaignState.campaign?.numberOfDonators || 0)}
                  </b>{" "}
                  doadores para atingir sua meta
                </div>
              </StyleCardDonut>
            </StyleBoxGoal>
          </Grid>
        </Grid>

        <Grid container item xs={12} lg={6} direction="column">
          <StyleTitleGoal container alignItems="center" justifyContent="center">
            Já arrecadamos
          </StyleTitleGoal>
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
                R${" "}
                {campaignState.campaign?.monthlyDonationsValue !== undefined
                  ? campaignState.campaign?.monthlyDonationsValue.toFixed(2)
                  : 0}
              </StyleBoxValue>
              <StyleDonationMonth>
                Em doações mensais para nossa campanha
              </StyleDonationMonth>
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
        style={{ width: "100%", textAlign: "center", padding: "50px" }}
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
