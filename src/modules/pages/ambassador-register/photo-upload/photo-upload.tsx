import HeaderInfluencerSVG from "../../../../assets/img/email/header-influenciador.svg";
import CameraIconSVG from "../../../../assets/img/photo-upload/camera-icon.svg";
import CloudIconSVG from "../../../../assets/img/photo-upload/cloud-icon.svg";
import ChosseFileSVG from "../../../../assets/img/photo-upload/subtitle-choose-file.svg";

import { Button, Grid } from "@mui/material";

import {
  RootContainer,
  Topo,
  BoxCard,
  StyleCard,
  CameraIcon,
  Title,
  SubTitle,
  StylePhotoUpload,
  DivSubmitButton,
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
      <RootContainer>
        <Topo src={HeaderInfluencerSVG} alt="topo-header" />
        <BoxCard>
          <Grid container xs={12} justifyContent="center">
            <StyleCard>
              <CameraIcon>
                <img src={CameraIconSVG} alt="CameraIcon" />
                <Title>{title}</Title>
              </CameraIcon>
              <Grid container xs={12} justifyContent="center">
                <SubTitle>{subTitle}</SubTitle>
              </Grid>
              <Grid item xs={12} justifyContent="center">
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

                <DivSubmitButton>
                  <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    fullWidth
                    style={{ maxWidth: "320px" }}
                  >
                    {send}
                  </Button>
                </DivSubmitButton>
              </Grid>
            </StyleCard>
          </Grid>
        </BoxCard>
      </RootContainer>
    </>
  );
};

export default PhotoUpload;
