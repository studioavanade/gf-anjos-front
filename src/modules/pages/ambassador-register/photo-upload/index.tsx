import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  Grid,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import CameraIconSVG from "../../../../assets/img/photo-upload/camera-icon.svg";
import CloudIconSVG from "../../../../assets/img/photo-upload/cloud-icon.svg";

import BackgroundWithHeader from "../../../components/background-with-header";
import MainContainer from "../../../components/main-container";
import PrivateComponentVerifier from "../../../components/private-component-verifier";
import { IApplicationState } from "../../../../store/rootReducer";
import {
  createCampaign,
  setAmbassadorIdIntoCampaign,
  updateCampaign,
} from "../../../../store/campaign/actions";
import {
  CameraIcon,
  Title,
  SubTitle,
  DivSubmitButton,
  DropzoneContainer,
  DropzoneTitleText,
  DropzoneSubTitleText,
  SuccessUploadText,
  RegisterDialogTitle,
  RegisterDialogContent,
} from "./styles";
import ROUTING_PATHS from "./../../../../routes/paths";
import { showErrorToast } from "./../../../../utils/toast";
import QuestionCircleIcon from "../../../../assets/img/photo-upload/question-circle";
import theme from "../../../../theme";
import {
  AmbassadorPhotoExample1,
  AmbassadorPhotoExample2,
  CheckIcon,
  CloseIcon,
} from "../../../../assets/img";
import {
  AMBASSADOR_STORAGE_KEY,
  MAX_PHOTO_SIZE_IN_MB,
} from "../../../../constants";
import { getStorage } from "../../../../utils/storage";
import { getAmbassadorSuccess } from "../../../../store/ambassador/actions";
import { IAmbassador } from "../../../../store/ambassador/types";
import {
  setLoading,
  clearLoading,
} from "../../../../store/loading-progress/actions";

const PhotoUpload = () => {
  const isSmallerThan600 = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openMoreInfoDialog, setOpenMoreInfoDialog] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [file, setFile] = useState<File>();

  const campaignState = useSelector(
    (state: IApplicationState) => state.campaign
  );

  const ambassadorState = useSelector(
    (state: IApplicationState) => state.ambassador.ambassador
  );

  const isEditMode = useSelector(
    (state: IApplicationState) => state.ambassador.isEditting
  );

  const handleFile = (file: any) => {
    if (file.size && file.size > MAX_PHOTO_SIZE_IN_MB * 1000000) {
      showErrorToast("Arquivo não pode ser maior que 10MB");
      return;
    }
    setFile(file);
  };

  const onDropFile = (acceptedFiles: any[]) => {
    handleFile(acceptedFiles[0]);
  };

  const onSubmitFile = () => {
    if (!file) {
      showErrorToast("Você precisa anexar um arquivo.");
      return;
    }

    if (
      !campaignState ||
      !campaignState.campaign ||
      !campaignState.campaign.ambassadorId ||
      !campaignState.campaign.targetDonators ||
      !campaignState.campaign.id
    ) {
      showAccountErrorAndRedirect(false);
      return;
    }

    dispatch(setLoading());

    if (!isEditMode) {
      dispatch(
        createCampaign(
          file,
          campaignState.campaign.ambassadorId,
          Number(campaignState.campaign.targetDonators),
          true,
          () => {
            setOpenSuccessDialog(true);
          },
          null,
          () => {
            dispatch(clearLoading());
          }
        )
      );
    } else {
      dispatch(
        updateCampaign(
          {
            ...campaignState.campaign,
            image: file,
            targetDonators: Number(campaignState.campaign.targetDonators),
          },
          () => {
            setOpenSuccessDialog(true);
          },
          null,
          () => {
            dispatch(clearLoading());
          }
        )
      );
    }
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
    else if (isDragActive) return "#04c6fb";
    else if (isFileDialogActive) return "black";
    return "grey";
  };

  const getSanitizedFilename = (filename: string) => {
    const [name, extension] = filename.split(".");
    if (name.length <= 10) return filename;

    const sanitizedName = name.slice(0, 17) + "(...)";

    return sanitizedName + "." + extension;
  };

  const showAccountErrorAndRedirect = (redirect: boolean = true) => {
    showErrorToast(
      `Crie uma conta ou entre novamente para seguir com este cadastro. ${
        redirect ? "Redirecionando em 5s..." : ""
      }`
    );
    if (redirect)
      setTimeout(() => {
        navigate(ROUTING_PATHS.AmbassadorCreateAccount);
      }, 5000);
  };

  useEffect(() => {
    if (
      !ambassadorState ||
      !ambassadorState.email ||
      ambassadorState.email.length < 1
    ) {
      const storedAmbassador = getStorage(AMBASSADOR_STORAGE_KEY);

      if (storedAmbassador && storedAmbassador.length > 0) {
        const parsedAmbassador: IAmbassador = JSON.parse(storedAmbassador);
        if (parsedAmbassador) dispatch(getAmbassadorSuccess(parsedAmbassador));
      } else {
        showAccountErrorAndRedirect();
      }
    } else if (ambassadorState.id) {
      dispatch(setAmbassadorIdIntoCampaign(ambassadorState.id));
    }
  }, [ambassadorState]);

  const CustomDialog = ({ title, content, button, open, onClose }: any) => (
    <Dialog
      open={open}
      onClose={() => {
        if (onClose) {
          onClose();
        }
      }}
      fullScreen={isSmallerThan600}
      style={{ minWidth: "var(--page-min-width)" }}
      maxWidth="md"
    >
      <RegisterDialogTitle
        sx={{
          m: 0,
          p: 2,
          fontSize: isSmallerThan600 ? "16px !important" : "27px",
        }}
      >
        {title}
        {onClose && (
          <IconButton
            onClick={() => {
              setOpenMoreInfoDialog(false);
            }}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
            }}
          >
            <img src={CloseIcon} alt="Icon Closed" />
          </IconButton>
        )}
      </RegisterDialogTitle>
      <RegisterDialogContent>{content}</RegisterDialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>{button}</DialogActions>
    </Dialog>
  );

  return (
    <BackgroundWithHeader>
      <PrivateComponentVerifier />
      <CustomDialog
        title="COMO SUA FOTO SERÁ UTILIZADA"
        open={openMoreInfoDialog}
        onClose={() => {
          setOpenMoreInfoDialog(false);
        }}
        content={
          <>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                  <img
                    src={AmbassadorPhotoExample1}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
                <Grid item>
                  <img
                    src={AmbassadorPhotoExample2}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{
                  textAlign: "center",
                  fontSize: isSmallerThan600 ? "18px !important" : "inherit",
                  marginTop: "32px",
                }}
              >
                Sua foto será utilizada na página de personalização da campanha.
              </Grid>
            </Grid>
          </>
        }
        button={
          <Button
            onClick={() => {
              setOpenMoreInfoDialog(false);
            }}
            variant="contained"
            type="submit"
            sx={{
              minWidth: isSmallerThan600 ? "100%" : "250px",
            }}
          >
            OK
          </Button>
        }
      />
      <CustomDialog
        title="UPLOAD DE FOTO"
        open={openSuccessDialog}
        content={
          <>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Grid item>
                <CheckIcon />
              </Grid>
              <Grid
                item
                style={{ fontFamily: "KG Life is Messy", color: "#00AEEF" }}
              >
                OBRIGADO
              </Grid>
              <Grid item>Imagem enviada com sucesso!</Grid>
              <Grid item>
                A URL da sua campanha é:{" "}
                <a
                  target="_blank"
                  href={
                    campaignState.campaign?.id
                      ? `/campaign?id=${campaignState.campaign?.id}`
                      : "#"
                  }
                >
                  /campaign?id={campaignState.campaign?.id}
                </a>
              </Grid>
            </Grid>
          </>
        }
        button={
          <Button
            component={Link}
            to={`/campaign?id=${campaignState.campaign?.id}`}
            onClick={() => {
              setOpenMoreInfoDialog(false);
            }}
            variant="contained"
            type="submit"
            sx={{
              minWidth: isSmallerThan600 ? "100%" : "250px",
            }}
          >
            CONTINUAR
          </Button>
        }
      />
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
            <Title>Envie sua foto</Title>
          </CameraIcon>
          <Grid container item xs={12} alignItems="center" direction="column">
            <SubTitle container justifyContent="center" alignItems="center">
              Envie uma foto de perfil para a sua página
            </SubTitle>
            <br />
            <SubTitle
              container
              justifyContent="center"
              alignItems="center"
              style={{
                marginBottom: "32px",
                fontSize: "16px",
                cursor: "pointer",
              }}
              onClick={() => {
                setOpenMoreInfoDialog(true);
              }}
            >
              <QuestionCircleIcon color="#F5821F" size={30} />
              <span
                style={{
                  color: "#04C6FB",
                  marginLeft: "8px",
                  textDecoration: "underline",
                }}
              >
                Visualizar como vai ser utilizada minha foto
              </span>
            </SubTitle>
          </Grid>
          <Grid item xs={12} justifyContent="center">
            <Grid container item justifyContent="center" alignItems="center">
              {!file ? (
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
                      <strong>Clique para escolher uma imagem</strong> ou
                      <strong> arraste-a para aqui</strong> <br />
                      <DropzoneSubTitleText>
                        Limite de tamanho: 10MB
                      </DropzoneSubTitleText>{" "}
                      <br />
                      <br />
                      <span style={{ color: "#F5821F" }}>
                        <strong>Recomendável: </strong>
                      </span>
                      A imagem precisa ser quadrada (mesmas dimensões na altura
                      e na largura. Por exemplo: 1000 x 1000)
                    </DropzoneTitleText>
                  </Grid>
                </DropzoneContainer>
              ) : (
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <SuccessUploadText item>
                    <i>{getSanitizedFilename(file.name)}</i>
                    <IconButton onClick={() => setFile(undefined)}>
                      <DeleteIcon />
                    </IconButton>
                  </SuccessUploadText>
                </Grid>
              )}
            </Grid>

            <DivSubmitButton>
              <Button
                variant="contained"
                type="submit"
                size="large"
                fullWidth
                style={{ maxWidth: "320px" }}
                onClick={onSubmitFile}
                disabled={!file}
              >
                {isEditMode ? "Salvar Campanha" : "Criar Campanha"}
              </Button>
            </DivSubmitButton>
          </Grid>
        </Grid>
      </MainContainer>
    </BackgroundWithHeader>
  );
};

export default PhotoUpload;
