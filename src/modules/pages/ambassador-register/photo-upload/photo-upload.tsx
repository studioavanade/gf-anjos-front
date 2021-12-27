import HeaderInfluencerSVG from "../../../../assets/img/email/header-influenciador.svg";
import CameraIconSVG from "../../../../assets/img/photo-upload/camera-icon.svg";
import CloudIconSVG from "../../../../assets/img/photo-upload/cloud-icon.svg";
import ChosseFileSVG from "../../../../assets/img/photo-upload/subtitle-choose-file.svg";

import { Button } from "@mui/material";

import {
  Body,
  Topo,
  BoxCard,
  StyleCard,
  CameraIcon,
  Title,
  SubTitle,
  StylePhotoUpload,
  ButtonStyled,
  StyleUploadFile,
  CloudIcon,
  ChooseFile,
} from "./photo-upload_styles";

const PhotoUpload = () => {
  const title = "Envie sua foto";
  const subTitle =
    "Envie uma foto de perfil para a sua página (se for uma empresa, enviar o logo)";
  const send = "Enviar";

  return (
    <>
      <Body>
        <Topo src={HeaderInfluencerSVG} alt="topo-header" />
        <BoxCard>
          <StyleCard>
            <CameraIcon>
              <img src={CameraIconSVG} alt="CameraIcon" />
              <Title>{title}</Title>
            </CameraIcon>
            <SubTitle>{subTitle}</SubTitle>
            <StyleUploadFile>
              <StylePhotoUpload>
                <CloudIcon>
                  <input
                    type="file"
                    multiple
                    style={{
                      position: "absolute",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: "100px",
                      paddingLeft: "15px",
                      padding: "90px",
                      opacity: "0",
                      cursor: "pointer",
                    }}
                  />
                  <img src={CloudIconSVG} alt="CloudIcon" />
                </CloudIcon>
                <ChooseFile>
                  <img src={ChosseFileSVG} alt="ChooseFile" />
                </ChooseFile>
              </StylePhotoUpload>
            </StyleUploadFile>
            <ButtonStyled>
              <Button
                variant="contained"
                type="submit"
                style={{
                  backgroundColor: "#04C6FB",
                  color: "#000000",
                  fontWeight: "bold",
                  fontSize: "16px",
                  width: "450px",
                }}
                fullWidth
              >
                {send}
              </Button>
            </ButtonStyled>
          </StyleCard>
        </BoxCard>
      </Body>
    </>
  );
};

export default PhotoUpload;
