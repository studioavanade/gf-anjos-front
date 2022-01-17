/* eslint-disable jsx-a11y/iframe-has-title */

import React from "react";
import IconHeartSVG from "../../../assets/img/ranking/icon-heart-box.svg";
import IconPageSVG from "../../../assets/img/ranking/icon-page-box.svg";
import IconWordSVG from "../../../assets/img/ranking/icon-document-box.svg";
import BackgroundConcessionSVG from "../../../assets/img/ranking/background-concession-slide.svg";
import IconPhysicalPersonSVG from "../../../assets/img/ranking/icon-physical-person.svg";
import IconJuridicalPersonSVG from "../../../assets/img/ranking/icon-juridical-person.svg";
import IconClosedDialogSVG from "../../../assets/img/ranking/icon-closed-dialog.svg";

import BackgroundWithHeader from "../../components/background-with-header";

import {
  Grid,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Carousel from "react-elastic-carousel";

import Photo1SVG from "../../../assets/img/ranking/slider-images/photo1.svg";
import Photo2SVG from "../../../assets/img/ranking/slider-images/photo2.svg";
import Photo3SVG from "../../../assets/img/ranking/slider-images/photo3.svg";
import Photo4SVG from "../../../assets/img/ranking/slider-images/photo4.svg";

import {
  StyleCardsRanking,
  TopContent,
  CardBoxInfluencer,
  StylePharses,
  TitleInfluencerBox,
  SubTitleInfluencerBox,
  StylePharseCreatePage,
  StylePharsePublicizePage,
  StylePharseAmountCollected,
  StyleIcon,
  StyleButtonDialog,
  DivSubmitButton,
  StyleTitleInfluencers,
  StyleBackgroundConcession,
  BackgroundImg,
  CarouselSlider,
  CarouselStyle,
  ItemPhotos,
  StyleTitleYourInfluencer,
  StyleSubTitleFamily,
  StylePharseFamily,
  PaperCardBox,
  TitleRanking,
  CardPhysicalPerson,
  CardJuridicalPerson,
  CardStyleListName,
  CardStyleListCompany,
  IconImgPersons,
  StyleColorText,
  TitleGF,
  StyleSubTitleGF,
  StyleMovies,
} from "./ranking_styles";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ROUTING_PATHS from "./../../../routes/paths/index";
import { useNavigate } from "react-router-dom";

const Ranking = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const titleInfluencer = "É SIMPLES VIRAR UM INFLUENCIADOR";
  const subTitleInfluencer =
    "Você pode criar uma página personalizada e ter sua meta para arrecadar doações que irão direto para a campanha!";
  const subtitleCreatePage =
    "Crie uma página personalizada e defina quantos influenciadores você quer engajar";
  const subtitlePublicizePage =
    "Divulgue a página nas suas redes sociais e influencie todo mundo a doar também";
  const subtitleAmountCollected =
    "O valor arrecado vai para Gerando Falcões e nos ajude a levar a pobreza das favelas pro museu";
  const subTitleDialog =
    "Complete o seu cadastro para receber uma página personalizada com o seu nome para arrecadar fundos para a campanha da Gerando Falcões!";
  const buttonInfluencer = "Quero ser um influenciador";
  const titleInfluencers = "Veja nossos influenciadores";
  const titleGF = "Gerando Falções";
  const subTitleGF =
    "Somos um ecossistema de desenvolvimento social que atua por meio da estratégia de rede em periferias e favelas de todo o Brasil. Atráves da Falcons University, Unidades Aceleradas, Oficinas e o Redesenho de Favelas, baseamos nossas ações em análise de dados e gestão eficiente, para interromper o ciclo de pobreza e transformar a pobreza em item de museu.";
  const titleRanking = "ACOMPANHE NOSSO RANKING DE ANJOS";
  const TitleDialog = "SEJA UM INFLUENCIADOR";
  const buttonStart = "COMEÇAR";
  const personName = "Nome";
  const company = "Empresa";
  const totalCollectedTitle = "Total arrecado";

  return (
    <>
      <BackgroundWithHeader bg="darkblue">
        <TopContent container item alignItems="center" justifyContent="center">
          <CardBoxInfluencer>
            <TitleInfluencerBox>{titleInfluencer}</TitleInfluencerBox>
            <SubTitleInfluencerBox>{subTitleInfluencer}</SubTitleInfluencerBox>
            <Grid
              container
              xs={12}
              display="flex"
              justifyContent="space-around"
            >
              <StylePharses>
                <StylePharseCreatePage>
                  <StyleIcon>
                    <img src={IconPageSVG} alt="IconPage" />
                  </StyleIcon>
                  {subtitleCreatePage}
                </StylePharseCreatePage>
                <StylePharsePublicizePage>
                  <StyleIcon>
                    <img src={IconHeartSVG} alt="IconPage" />
                  </StyleIcon>
                  {subtitlePublicizePage}
                </StylePharsePublicizePage>
                <StylePharseAmountCollected>
                  <StyleIcon>
                    <img src={IconWordSVG} alt="IconPage" />
                  </StyleIcon>
                  {subtitleAmountCollected}
                </StylePharseAmountCollected>
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
                <Dialog
                  fullScreen={fullScreen}
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
              </DivSubmitButton>
            </Grid>
          </CardBoxInfluencer>
        </TopContent>
      </BackgroundWithHeader>

      <StyleTitleInfluencers>{titleInfluencers}</StyleTitleInfluencers>
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
              <ItemPhotos>
                <img src={Photo1SVG} alt="photo1" />
              </ItemPhotos>
              <ItemPhotos>
                <img src={Photo2SVG} alt="photo2" />
              </ItemPhotos>
              <ItemPhotos>
                <img src={Photo3SVG} alt="photo3" />
              </ItemPhotos>
              <ItemPhotos>
                <img src={Photo4SVG} alt="photo4" />
              </ItemPhotos>
              <ItemPhotos>
                <img src={Photo1SVG} alt="photo1" />
              </ItemPhotos>
              <ItemPhotos>
                <img src={Photo2SVG} alt="photo2" />
              </ItemPhotos>
              <ItemPhotos>
                <img src={Photo3SVG} alt="photo3" />
              </ItemPhotos>
              <ItemPhotos>
                <img src={Photo4SVG} alt="photo4" />
              </ItemPhotos>
              <ItemPhotos>
                <img src={Photo3SVG} alt="photo3" />
              </ItemPhotos>
              <ItemPhotos>
                <img src={Photo3SVG} alt="photo3" />
              </ItemPhotos>
              <ItemPhotos>
                <img src={Photo3SVG} alt="photo3" />
              </ItemPhotos>
            </Carousel>
          </CarouselSlider>
        </CarouselStyle>
        <StyleTitleYourInfluencer>
          <span style={{ color: "#04C6FB" }}>Como funciona</span> a sua
          influência?
        </StyleTitleYourInfluencer>
        <StylePharseFamily>
          <StyleSubTitleFamily>
            Uma família de, aproximadamente, 5 pessoas precisa de 1 cesta básica
            a cada 15 dias. O Valor arrecadado por você será transformado em
            cestas básicas digitais que vão ajudar essas famílias e não passar
            necessidade. As cestas são direcionadas para as nossas unidades que
            farão todo o processo de entrega para as famílias mais carentes.
            <b> Vamos doar R$: 150,00 durante 2 meses para cada uma delas.</b>
          </StyleSubTitleFamily>
        </StylePharseFamily>
        <Grid container justifyContent="center" xs={12}>
          <PaperCardBox>
            <TitleRanking>{titleRanking}</TitleRanking>
            <StyleCardsRanking container xs={12}>
              <Grid item xs={12} md={6}>
                <CardPhysicalPerson>
                  <IconImgPersons>
                    <img src={IconPhysicalPersonSVG} alt="IconPerson" />
                  </IconImgPersons>
                  <CardStyleListName>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell
                            style={{
                              fontWeight: "bold",
                              justifyContent: "space-between",
                            }}
                          >
                            {personName}
                          </TableCell>
                          <TableCell
                            style={{
                              fontWeight: "bold",
                              justifyContent: "space-between",
                            }}
                          >
                            {totalCollectedTitle}
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableCell>Nome completo da pessoa</TableCell>
                        <TableCell>R$: 75.000,00</TableCell>
                      </TableBody>
                    </Table>
                  </CardStyleListName>
                </CardPhysicalPerson>
              </Grid>
              <Grid item xs={12} md={6}>
                <CardJuridicalPerson>
                  <IconImgPersons>
                    <img src={IconJuridicalPersonSVG} alt="IconPerson" />
                  </IconImgPersons>
                  <CardStyleListCompany>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell
                            style={{
                              fontWeight: "bold",
                              justifyContent: "space-between",
                            }}
                          >
                            {company}
                          </TableCell>
                          <TableCell
                            style={{
                              fontWeight: "bold",
                              justifyContent: "space-between",
                            }}
                          >
                            {totalCollectedTitle}
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableCell>Nome da emppresa</TableCell>
                        <TableCell>R$: 75.000,00</TableCell>
                      </TableBody>
                    </Table>
                  </CardStyleListCompany>
                </CardJuridicalPerson>
              </Grid>
            </StyleCardsRanking>
          </PaperCardBox>
        </Grid>
        
      </StyleBackgroundConcession>
      <Grid container xs={12} justifyContent="center">
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <StyleColorText>
                <StyleSubTitleGF>
                  <TitleGF>{titleGF}</TitleGF>
                  {subTitleGF}
                </StyleSubTitleGF>
              </StyleColorText>
            </Grid>
            <Grid item xs={12} md={6}>
              <StyleMovies>
                <iframe
                  width="630"
                  height="420"
                  src="https://www.youtube.com/embed/lHq387vic-c"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </StyleMovies>
            </Grid>
          </Grid>
        </Grid>
    </>
  );
};

export default Ranking;
