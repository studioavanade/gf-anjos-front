import CameraIconSVG from "../../../../assets/img/photo-upload/camera-icon.svg";
import CloudIconSVG from "../../../../assets/img/photo-upload/cloud-icon.svg";
import ChooseFileSVG from "../../../../assets/img/photo-upload/subtitle-choose-file.svg";

import { Button, Grid } from "@mui/material";
import { useDropzone } from "react-dropzone";

import {
  CameraIcon,
  Title,
  SubTitle,
  StylePhotoUpload,
  DivSubmitButton,
  DropzoneContainer,
  DropzoneTitleText,
  DropzoneSubTitleText,
} from "./styles";
import BackgroundWithHeader from "../../../components/background-with-header";
import MainContainer from "../../../components/main-container";
import { useState } from "react";

const PhotoUpload = () => {
  const title = "Envie sua foto";
  const subTitle =
    "Envie uma foto de perfil para a sua página (se for uma empresa, enviar o logo)";
  const send = "Enviar";

  const [file, setFile] = useState<File>();

  const handleFile = (file: any) => {
    setFile(file);
  };

  const onDropFile = (acceptedFiles: any[]) => {
    handleFile(acceptedFiles[0]);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isFileDialogActive,
    isDragReject,
  } = useDropzone({
    onDrop: onDropFile,
    accept: "image/jpeg, image/jpg, image/png, image/gif",
  });

  const getBorderColor = () => {
    if (isDragReject) return "red";
    else if (isDragActive) return "green";
    else if (isFileDialogActive) return "cyan";
    return "grey";
  };

  return (
    <BackgroundWithHeader>
      <MainContainer maxWidth="70vw">
        <Grid container justifyContent="center" alignItems="center" spacing={4}>
          <CameraIcon
            container
            item
            justifyContent="center"
            direction="row"
            alignItems="center"
          >
            <img src={CameraIconSVG} alt="CameraIcon" />
            <Title>{title}</Title>
          </CameraIcon>
          <Grid container item xs={12} justifyContent="center">
            <SubTitle>{subTitle}</SubTitle>
          </Grid>
          <Grid item xs={12} justifyContent="center">
            <Grid container item justifyContent="center" alignItems="center">
              <DropzoneContainer
                container
                item
                justifyContent="center"
                alignItems="center"
                direction="column"
                {...getRootProps()}
                style={{ borderColor: getBorderColor() }}
              >
                <input {...getInputProps()} />
                <Grid
                  container
                  item
                  justifyContent="center"
                  alignItems="center"
                >
                  <img src={CloudIconSVG} alt="CloudIcon" />
                </Grid>
                <Grid
                  container
                  item
                  justifyContent="center"
                  alignItems="center"
                >
                  <DropzoneTitleText>
                    <strong>Clique para escolher uma imagem</strong> ou{" "}
                    <strong>a arraste para aqui</strong>
                  </DropzoneTitleText>
                  <DropzoneSubTitleText>
                    Limite de tamanho: 10MB
                  </DropzoneSubTitleText>
                </Grid>
              </DropzoneContainer>
            </Grid>

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
        </Grid>
      </MainContainer>
    </BackgroundWithHeader>
  );
};

export default PhotoUpload;
