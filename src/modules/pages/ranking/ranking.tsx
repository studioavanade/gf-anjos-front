/* eslint-disable jsx-a11y/iframe-has-title */

import React, { useState } from "react";
import HeaderInfluencerSVG from "../../../assets/img/ranking/header-influencer.svg";
import IconHeartSVG from "../../../assets/img/ranking/icon-heart-box.svg";
import IconPageSVG from "../../../assets/img/ranking/icon-page-box.svg";
import IconWordSVG from "../../../assets/img/ranking/icon-document-box.svg";
import BackgroundConcessionSVG from "../../../assets/img/ranking/background-concession-slide.svg";
import IconPhysicalPersonSVG from "../../../assets/img/ranking/icon-physical-person.svg";
import IconJuridicalPersonSVG from "../../../assets/img/ranking/icon-juridical-person.svg";
import IconClosedDialogSVG from "../../../assets/img/ranking/icon-closed-dialog.svg";

import Photo1 from "../../../assets/img/ranking/slider-images/photo1.svg";
import Photo2 from "../../../assets/img/ranking/slider-images/photo2.svg";
import Photo3 from "../../../assets/img/ranking/slider-images/photo3.svg";
import Photo4 from "../../../assets/img/ranking/slider-images/photo4.svg";



import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";


import {
  RootContainer,
  HeaderInfluencer,
  InfluencerBox,
  TitleInfluencerBox,
  SubTitleInfluencerBox,
  BoxCentralizacion,
  ColumnPhrasesBox,
  StylePharseCreatePage,
  StylePharsePublicizePage,
  StylePharseAmountCollected,
  StyleIcon,
  StyleButtonDialog,
  DivSubmitButton,
  StyleTitleInfluencers,
  StyleBackgroundConcession,
  BackgroundImg,
  StyleBox,
  StyleSlider,
  StyleSliderPhoto,
  CarouselStyle,
  CarouselInner,
  StyleTitleYourInfluencer,
  StyleSubTitleFamily,
  StylePharseFamily,
  StyleBoxRanking,
  CardRanking,
  TitleRanking,
  StyleCardPersons,
  CardPhysicalPerson,
  CardJuridicalPerson,
  CardStyleListName,
  CardStyleListCompany,
  IconImgPersons,
  StyleColorCardAndMovies,
  StyleCardAndMovies,
  StyleTitle,
  TitleGF,
  StyleSubTitleGF,
  StyleMovies,
} from "./ranking_styles";

import { Button, Typography } from "@mui/material";

const Ranking = () => {


  const slides = [
    <img src={Photo1} alt="Photo1" />,
    <img src={Photo2} alt="Photo2" />,
    <img src={Photo3} alt="Photo3" />,
    <img src={Photo4} alt="Photo4" />,
  ];


  const [currImg, setCurrImg] = useState(0);

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

  return (
    <>
      <RootContainer>
        <HeaderInfluencer>
          <img src={HeaderInfluencerSVG} width="100%" alt="HeaderInfluencer" />
        </HeaderInfluencer>
        <BoxCentralizacion>
          <InfluencerBox>
            <TitleInfluencerBox>{titleInfluencer}</TitleInfluencerBox>
            <SubTitleInfluencerBox>{subTitleInfluencer}</SubTitleInfluencerBox>
            <ColumnPhrasesBox>
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
            </ColumnPhrasesBox>
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
                  <DialogTitle style={{ fontFamily: "KG Life is Messy", fontSize: "27px"}}>
                    {TitleDialog}
                    <Button
                      style={{ paddingLeft: "130px", backgroundColor: "transparent" }}
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
                  onClick={handleClickOpen}
                  variant="contained"
                  type="submit"
                  fullWidth
                >
                  {buttonStart}
                </Button>
              </Dialog>
            </DivSubmitButton>
          </InfluencerBox>
        </BoxCentralizacion>
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
          <StyleBox>
            <StyleSlider>
              <StyleSliderPhoto>
                <CarouselStyle>
                  <CarouselInner>
                    <CarouselStyle>
                     <img src={Photo1} width="320px"  height="450px"  alt="photo1" />
                     <img src={Photo2} height="450px" alt="photo2" />
                     <img src={Photo3} height="450px" alt="photo3" />
                     <img src={Photo4} height="450px" alt="photo4" />
                    </CarouselStyle>
                  </CarouselInner>
                </CarouselStyle>
              </StyleSliderPhoto>
            </StyleSlider>
          </StyleBox>
          <StyleTitleYourInfluencer>
            <span style={{ color: "#04C6FB" }}>Como funciona</span> a sua
            influência?
          </StyleTitleYourInfluencer>
          <StylePharseFamily>
            <StyleSubTitleFamily>
              Uma família de, aproximadamente, 5 pessoas precisa de 1 cesta
              básica a cada 15 dias. O Valor arrecadado por você será
              transformado em cestas básicas digitais que vão ajudar essas
              famílias e não passar necessidade. As cestas são direcionadas para
              as nossas unidades que farão todo o processo de entrega para as
              famílias mais carentes.
              <b>Vamos doar R$: 150,00 durante 2 meses para cada uma delas.</b>
            </StyleSubTitleFamily>
          </StylePharseFamily>
          <StyleBoxRanking>
            <CardRanking>
              <TitleRanking>{titleRanking}</TitleRanking>
              <StyleCardPersons>
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
                            Nome
                          </TableCell>
                          <TableCell
                            style={{
                              fontWeight: "bold",
                              justifyContent: "space-between",
                            }}
                          >
                            Total arrecado
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
                            Empresa
                          </TableCell>
                          <TableCell
                            style={{
                              fontWeight: "bold",
                              justifyContent: "space-between",
                            }}
                          >
                            Total arrecado
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
              </StyleCardPersons>
            </CardRanking>
          </StyleBoxRanking>
          <StyleColorCardAndMovies>
            <StyleCardAndMovies>
              <StyleTitle>
                <TitleGF>{titleGF}</TitleGF>
                <StyleSubTitleGF>{subTitleGF}</StyleSubTitleGF>
              </StyleTitle>
              <StyleMovies>
                <iframe
                  width="630"
                  height="420"
                  src="https://www.youtube.com/embed/lHq387vic-c"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </StyleMovies>
            </StyleCardAndMovies>
          </StyleColorCardAndMovies>
        </StyleBackgroundConcession>
      </RootContainer>
    </>
  );
};

export default Ranking;
