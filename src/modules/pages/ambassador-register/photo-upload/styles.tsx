import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const CameraIcon = styled(Grid)``;

const maxWidth = "550px";

export const Title = styled.div`
  font-size: 28px;
  font-family: "KG Life is Messy";
  text-align: center;
  padding-left: 16px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const SubTitle = styled.div`
  font-family: "AvenirLTSd Roman";
  font-size: 18px;
  max-width: ${maxWidth};
  text-align: center;
`;

export const StylePhotoUpload = styled(Grid)`
  padding-top: 45px;
  background-color: #f2f2f2;
  border: 2px dashed #888888;
  font-family: Roboto;
  font-weight: 700;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const DivSubmitButton = styled.div`
  padding-top: 35px;
  text-align: center;
`;

export const DropzoneContainer = styled(Grid)`
  flex: 1;
  text-align: center;
  padding: 16px;
  border-width: 2px;
  border-style: dashed;
  color: black;
  outline: none;
  transition: border 0.24s ease-in-out;
  height: 250px;
  width: 100%;
  max-width: ${maxWidth};
  min-width: 250px;
  box-shadow: 0px 0px 10px #dedede;
  cursor: pointer;
  background-color: #f2f2f2;
  &:hover {
    border-color: #dedede !important;
  }
`;

export const DropzoneTitleText = styled.span`
  color: #6c6c6c;
  margin-top: 16px;
`;

export const DropzoneSubTitleText = styled.span`
  color: #6c6c6c;
  font-size: 12px;
`;

export const SuccessUploadText = styled(Grid)`
  color: #2e7d32;
  font-size: 16px;
  margin-bottom: 16px;
`;
