import React from "react";
import { Link } from "react-router-dom";

import {
  IconButton,
  Button,
  DialogActions,
  useMediaQuery,
} from "@mui/material";

import IconHeartSVG from "../../../assets/img/ranking/icon-heart-box.svg";
import IconPageSVG from "../../../assets/img/ranking/icon-page-box.svg";
import IconWordSVG from "../../../assets/img/ranking/icon-document-box.svg";
import BackgroundConcessionSVG from "../../../assets/img/ranking/background-concession-slide.svg";
import { CloseIcon } from "../../../assets/img";

import BackgroundWithHeader from "../../components/background-with-header";

import {
  Grid,
  TableHead,
  TableBody,
  TableRow,
  Dialog,
  TableContainer,
} from "@mui/material";
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
  DivSubmitButton,
  TitleOurInfluencers,
  StyleBackgroundConcession,
  BackgroundImg,
  CarouselSlider,
  HorizontalCarouselContainer,
  ItemHCarousel,
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
  RegisterDialogTitle,
  RegisterDialogContent,
  ItemVCarousel,
} from "./styles";
import ROUTING_PATHS from "../../../routes/paths/index";
import theme from "../../../theme";

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
  const isSmallerThan900 = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallerThan600 = useMediaQuery(theme.breakpoints.down("sm"));

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

  const IconCard = ({ icon, text }) => (
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

  const RegisterDialog = () => (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="Seja um influenciador"
      fullScreen={isSmallerThan600}
      style={{ minWidth: "var(--page-min-width)" }}
    >
      <RegisterDialogTitle sx={{ m: 0, p: 2 }}>
        SEJA UM INFLUENCIADOR
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
          }}
        >
          <img src={CloseIcon} alt="Icon Closed" />
        </IconButton>
      </RegisterDialogTitle>
      <RegisterDialogContent>
        Complete o seu cadastro para receber uma página personalizada com o seu
        nome para arrecadar fundos para a campanha da Gerando Falcões!
      </RegisterDialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        {" "}
        <Button
          component={Link}
          to={ROUTING_PATHS.AmbassadorCreateAccount}
          onClick={handleClickOpen}
          variant="contained"
          type="submit"
          sx={{ minWidth: isSmallerThan600 ? "100%" : "250px" }}
        >
          COMEÇAR
        </Button>
      </DialogActions>
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
      <Grid
        container
        item
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
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
              <RankingTableCell bold="true" align="left">
                Nome
              </RankingTableCell>
              <RankingTableCell bold="true" align="right">
                Total arrecadado
              </RankingTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!!list &&
              list.length > 0 &&
              list.map(({ ambassador, totalValue }) => (
                <TableRow key={ambassador + Math.random() * 10000}>
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

  const HorizontalCarousel = () => (
    <HorizontalCarouselContainer
      container
      justifyContent="center"
      alignItems="center"
    >
      <CarouselSlider>
        <Carousel focusOnSelect={true} itemsToShow={4}>
          {sliderPhotos.map((photo) => (
            <ItemHCarousel key={photo.toString() + Math.random() * 10000}>
              <img src={photo} alt={photo.toString()} />
            </ItemHCarousel>
          ))}
        </Carousel>
      </CarouselSlider>
    </HorizontalCarouselContainer>
  );

  const VerticalGallery = () => (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ marginTop: "50px" }}
    >
      {sliderPhotos.slice(0, 4).map((photo) => (
        <ItemVCarousel item sx={12}>
          <img src={photo} alt={photo.toString()} key={photo.toString()} />
        </ItemVCarousel>
      ))}
    </Grid>
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
            Quero ser um influenciador
          </Button>
        </DivSubmitButton>
      </TopContent>

      <TitleOurInfluencers>Veja nossos influenciadores</TitleOurInfluencers>

      <StyleBackgroundConcession container>
        <BackgroundImg>
          <img
            src={BackgroundConcessionSVG}
            alt="BackgroundConcession"
            width="100%"
            height="100%"
          />
        </BackgroundImg>
      </StyleBackgroundConcession>
      {!isSmallerThan600 ? <HorizontalCarousel /> : <VerticalGallery />}

      <TitleYourInfluence container justifyContent="center">
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
        <RankingSpacer item xs={12} lg={0.5} />
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
              <TitleGF>Gerando Falções</TitleGF>
              const subTitleGF: "Somos um ecossistema de desenvolvimento social
              que atua por meio da estratégia de rede em periferias e favelas de
              todo o Brasil. Atráves da Falcons University, Unidades Aceleradas,
              Oficinas e o Redesenho de Favelas, baseamos nossas ações em
              análise de dados e gestão eficiente, para interromper o ciclo de
              pobreza e transformar a pobreza em item de museu.
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
