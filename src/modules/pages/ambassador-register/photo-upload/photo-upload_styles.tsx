import styled from "@emotion/styled";

export const RootContainer = styled.div`
  height: 940px;
  width: auto;
  background-color: #ffffff;
`;

export const Topo = styled.img`
  min-width: var(--page-min-width);
  height: auto;
  position: absolute;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
`;

export const BoxCard = styled.div`
  padding-top: 370px;
  display: flex;
  justify-content: center;
  padding-top: 20vw;
`;

export const StyleCard = styled.div`
  position: relative;
  width: 1100px;
  height: 550px;
  padding-top: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: 3px solid #e7e7e7;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const CameraIcon = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-family: "KG Life is Messy";
  padding-left: 10px;
  white-space: normal;
`;

export const SubTitle = styled.div`
  padding: 15px;
  font-family: "AvenirLTSd Roman";
  max-width: 350px;
  text-align: center;
`;

export const StyleUploadFile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StylePhotoUpload = styled.div`
  justify-content: center;
  padding-top: 45px;
  width: 610px;
  height: 250px;
  background-color: #f2f2f2;
  border: 2px dashed #888888;
  font-family: Roboto;
  font-weight: 700;
  color: #2f2d8e;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const CloudIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ChooseFile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivSubmitButton = styled.div`
  position: relative;
  padding-top: 35px;
  text-align: center;
`;
