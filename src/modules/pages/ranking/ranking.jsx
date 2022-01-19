/* eslint-disable jsx-a11y/iframe-has-title */

import React from "react";
import IconHeartSVG from "../../../assets/img/ranking/icon-heart-box.svg";
import IconPageSVG from "../../../assets/img/ranking/icon-page-box.svg";
import IconWordSVG from "../../../assets/img/ranking/icon-document-box.svg";
import BackgroundConcessionSVG from "../../../assets/img/ranking/background-concession-slide.svg";
import IconClosedDialogSVG from "../../../assets/img/ranking/icon-closed-dialog.svg";

import BackgroundWithHeader from "../../components/background-with-header";

import {
  Grid,
  TableHead,
  TableBody,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TableContainer,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Carousel from "react-elastic-carousel";

import Photo1SVG from "../../../assets/img/ranking/slider-images/photo1.svg";
import Photo2SVG from "../../../assets/img/ranking/slider-images/photo2.svg";
import Photo3SVG from "../../../assets/img/ranking/slider-images/photo3.svg";
import Photo4SVG from "../../../assets/img/ranking/slider-images/photo4.svg";
import { PersonIcon, SuitCaseIcon } from "../../../assets/img";

import {
  TopContent,
  StylePharses,
  TitleInfluencerBox,
  SubTitleInfluencerBox,
  IconText,
  StyleIcon,
  StyleButtonDialog,
  DivSubmitButton,
  TitleOurInfluencers,
  StyleBackgroundConcession,
  BackgroundImg,
  CarouselSlider,
  CarouselStyle,
  ItemPhotos,
  TitleYourInfluence,
  DescriptionYourInfluence,
  PaperCardBox,
  TitleRanking,
  RankingCard,
  StyleColorText,
  TitleGF,
  SubTitleGF,
  VideoContainer,
  IconTextSubtitle,
  RankingHeaderTitle,
  RankingHeaderSubtitle,
  RankingTable,
  RankingSpacer,
  RankingTableCell,
  ResponsiveIframe,
} from "./styles";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ROUTING_PATHS from "../../../routes/paths/index";

const mockedRanking = [
  {
    ambassador: "Nome do embaixador",
    totalValue: 15500,
  },
  {
    ambassador: "Nome do embaixador",
    totalValue: 15500,
  },
  {
    ambassador: "Nome do embaixador",
    totalValue: 15500,
  },
  {
    ambassador: "Nome do embaixador",
    totalValue: 15500,
  },
  {
    ambassador: "Nome do embaixador",
    totalValue: 15500,
  },
  {
    ambassador: "Nome do embaixador",
    totalValue: 15500,
  },
  {
    ambassador: "Nome do embaixador",
    totalValue: 15500,
  },
  {
    ambassador: "Nome do embaixador",
    totalValue: 15500,
  },
  {
    ambassador: "Nome do embaixador",
    totalValue: 15500,
  },
  {
    ambassador: "Nome do embaixador",
    totalValue: 15500,
  },
  {
    ambassador: "Nome do embaixador",
    totalValue: 15500,
  },
  {
    ambassador: "Nome do embaixador",
    totalValue: 15500,
  },
  {
    ambassador: "Nome do embaixador",
    totalValue: 15500,
  },
  {
    ambassador: "Nome do embaixador",
    totalValue: 15500,
  },
  {
    ambassador: "Nome do embaixador",
    totalValue: 15500,
  },
];

const Ranking = () => {
  const [open, setOpen] = React.useState(false);
  const isSmallerThan900 = useMediaQuery("(max-width: 900px");

  const sliderPhotos = [
    Photo1SVG,
    Photo2SVG,
    Photo3SVG,
    Photo4SVG,
    Photo1SVG,
    Photo2SVG,
    Photo3SVG,
    Photo4SVG,
    Photo1SVG,
    Photo2SVG,
    Photo3SVG,
    Photo4SVG,
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const subTitleDialog =
    "Complete o seu cadastro para receber uma página personalizada com o seu nome para arrecadar fundos para a campanha da Gerando Falcões!";
  const buttonInfluencer = "Quero ser um influenciador";
  const titleGF = "Gerando Falções";
  const subTitleGF =
    "Somos um ecossistema de desenvolvimento social que atua por meio da estratégia de rede em periferias e favelas de todo o Brasil. Atráves da Falcons University, Unidades Aceleradas, Oficinas e o Redesenho de Favelas, baseamos nossas ações em análise de dados e gestão eficiente, para interromper o ciclo de pobreza e transformar a pobreza em item de museu.";
  const TitleDialog = "SEJA UM INFLUENCIADOR";
  const buttonStart = "COMEÇAR";

  const IconCard = ({ icon, text }) => {
    return (
      <IconText
        container
        item
        direction="column"
        xs={12}
        md={4}
        alignItems="center"
        justifyContent="center"
      >
        <StyleIcon>
          <img src={icon} alt="Icon" />
        </StyleIcon>
        <IconTextSubtitle container item>
          {text}
        </IconTextSubtitle>
      </IconText>
    );
  };

  const RegisterDialog = () => (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      aria-labelledby="Seja um influenciador"
      fullWidth
    >
      <StyleButtonDialog>
        <DialogTitle
          style={{
            fontFamily: "KG Life is Messy",
            fontSize: "27px",
          }}
        >
          {TitleDialog}
          <Button
            style={{
              paddingLeft: "130px",
              backgroundColor: "transparent",
            }}
            onClick={handleClose}
            autoFocus
          >
            <img src={IconClosedDialogSVG} alt="Icon Closed" />
          </Button>
        </DialogTitle>
      </StyleButtonDialog>
      <DialogContent>
        <DialogContentText>{subTitleDialog}</DialogContentText>
      </DialogContent>
      <Button
        component={Link}
        to={ROUTING_PATHS.AmbassadorCreateAccount}
        onClick={handleClickOpen}
        variant="contained"
        type="submit"
        fullWidth
      >
        {buttonStart}
      </Button>
    </Dialog>
  );

  const CardHeader = ({ color, icon, title }) => (
    <Grid
      container
      item
      direction="column"
      justifyContent="center"
      style={{ padding: "16px 0px" }}
    >
      <Grid container item direction="row" spacing={2} justifyContent="center">
        <Grid item style={{ padding: "16px 0px 8px 0px" }}>
          {icon}
        </Grid>
        <Grid item>
          <RankingHeaderTitle color={color}>INFLUENCIADOR</RankingHeaderTitle>
        </Grid>
      </Grid>
      <Grid container item justifyContent="center">
        <RankingHeaderSubtitle>{title}</RankingHeaderSubtitle>
      </Grid>
    </Grid>
  );

  const RankingParentCard = ({ color, icon, title, list, ...rest }) => (
    <RankingCard
      container
      item
      alignItems="center"
      direction="column"
      wrap="nowrap"
      {...rest}
    >
      <CardHeader color={color} title={title} icon={icon} />

      <TableContainer style={{ maxHeight: "450px" }}>
        <RankingTable>
          <TableHead>
            <TableRow>
              <RankingTableCell bold align="left">
                Nome
              </RankingTableCell>
              <RankingTableCell bold align="right">
                Total arrecadado
              </RankingTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!!list &&
              list.length > 0 &&
              list.map(({ ambassador, totalValue }) => (
                <TableRow key={ambassador}>
                  <RankingTableCell align="left">{ambassador}</RankingTableCell>
                  <RankingTableCell align="right">
                    {totalValue}
                  </RankingTableCell>
                </TableRow>
              ))}
          </TableBody>
        </RankingTable>
      </TableContainer>
    </RankingCard>
  );

  return (
    <BackgroundWithHeader bg="darkblue">
      <RegisterDialog />
      <TopContent container item alignItems="center" justifyContent="center">
        <TitleInfluencerBox
          container
          alignItems="center"
          justifyContent="center"
        >
          É SIMPLES VIRAR UM INFLUENCIADOR
        </TitleInfluencerBox>
        <SubTitleInfluencerBox container justifyContent="center">
          Você pode criar uma página personalizada e ter sua meta para arrecadar
          doações que irão direto para a campanha!
        </SubTitleInfluencerBox>
        <StylePharses
          container
          display="flex"
          justifyContent={isSmallerThan900 ? "center" : "space-between"}
          alignItems="center"
          direction="row"
          spacing={5}
        >
          <IconCard
            icon={IconPageSVG}
            text="Crie uma página personalizada e defina quantos influenciadores você quer engajar"
          />
          <IconCard
            icon={IconHeartSVG}
            text="Divulgue a página nas suas redes sociais e influencie todo mundo a doar também"
          />
          <IconCard
            icon={IconWordSVG}
            text="O valor arrecado vai para Gerando Falcões e nos ajude a levar a pobreza das favelas pro museu"
          />
        </StylePharses>

        <DivSubmitButton>
          <Button
            onClick={handleClickOpen}
            variant="contained"
            type="submit"
            fullWidth
          >
            {buttonInfluencer}
          </Button>
        </DivSubmitButton>
      </TopContent>

      <TitleOurInfluencers>Veja nossos influenciadores</TitleOurInfluencers>

      <StyleBackgroundConcession>
        <BackgroundImg>
          <img
            src={BackgroundConcessionSVG}
            alt="BackgroundConcession"
            width="100%"
            height="100%"
          />
        </BackgroundImg>
        <CarouselStyle>
          <CarouselSlider>
            <Carousel focusOnSelect={true} itemsToShow={4}>
              {sliderPhotos.map((photo) => (
                <ItemPhotos>
                  <img
                    src={photo}
                    alt={photo.toString()}
                    key={photo.toString()}
                  />
                </ItemPhotos>
              ))}
            </Carousel>
          </CarouselSlider>
        </CarouselStyle>
      </StyleBackgroundConcession>

      <TitleYourInfluence>
        <span style={{ color: "#04C6FB" }}>Como funciona</span> a sua
        influência?
      </TitleYourInfluence>

      <DescriptionYourInfluence
        container
        alignItems="center"
        justifyContent="center"
      >
        Uma família de, aproximadamente, 5 pessoas precisa de 1 cesta básica a
        cada 15 dias. O Valor arrecadado por você será transformado em cestas
        básicas digitais que vão ajudar essas famílias e não passar necessidade.
        As cestas são direcionadas para as nossas unidades que farão todo o
        processo de entrega para as famílias mais carentes.
        <b> Vamos doar R$: 150,00 durante 2 meses para cada uma delas.</b>
      </DescriptionYourInfluence>

      <PaperCardBox container justifyContent="center">
        <TitleRanking container item justifyContent="center" xs={12}>
          ACOMPANHE NOSSO RANKING DE ANJOS
        </TitleRanking>

        <RankingParentCard
          xs={12}
          lg={5.5}
          color="#F87A00"
          icon={<PersonIcon color="#F87A00" />}
          title="PESSOA FÍSICA"
          list={mockedRanking}
        />
        <RankingSpacer xs={12} lg={0.5} />
        <RankingParentCard
          xs={12}
          lg={5.5}
          color="#00AEEF"
          icon={<SuitCaseIcon color="#00AEEF" />}
          title="PESSOA JURÍDICA"
          list={mockedRanking}
        />
      </PaperCardBox>

      <Grid container justifyContent="center" style={{ marginTop: "60px" }}>
        <Grid item xs={12} lg={6}>
          <StyleColorText>
            <SubTitleGF>
              <TitleGF>{titleGF}</TitleGF>
              {subTitleGF}
            </SubTitleGF>
          </StyleColorText>
        </Grid>

        <VideoContainer item xs={12} lg={6}>
          <ResponsiveIframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/lHq387vic-c"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></ResponsiveIframe>
        </VideoContainer>
      </Grid>
    </BackgroundWithHeader>
  );
};

export default Ranking;