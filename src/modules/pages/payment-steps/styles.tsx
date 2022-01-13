import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const RootContainer = styled(Grid)`
  width: 100%;
  height: 100vh;
`;

export const Background = styled.div`
  height: 100%;
  position: absolute;
  z-index: -1;
`;

export const InnerContentContainer = styled(Grid)`
  height: 100%;
  padding-top: 12vw;
`;

export const TopContent = styled(Grid)`
  margin-bottom: 64px;
`;

export const BottomContent = styled(Grid)`
  width: 85vw;
  border-radius: 24px;
  background-color: #fff;
  border: 3px solid #e5e5e5;
  padding-right: 24px !important;
  margin-left: 0px;
`;

export const TopImage = styled.img`
  width: 100%;
  height: auto;
`;

export const PageTitle = styled(Grid)`
  font-size: 2rem;
  font-family: "KG Life is Messy";
  color: white;
  text-align: center;
  margin-bottom: 2vw;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const StepsHeader = styled(Grid)`
  width: 85vw;
  border-radius: 24px;
  background-color: #e7e7e7;
  text-align: center;
  padding: 32px 16px;
`;

export const StepsItemBG = styled.div`
  text-align: center;
  background-color: #e7e7e7;
  z-index: 10;
`;

export const StepName = styled.div`
  font-size: 23px;
  margin-top: 16px;
`;

export const Stroke = styled.svg`
  position: relative;
  top: 95px;
  z-index: 1;
  left: 0;
  @media (max-width: 900px) {
    display: none;
  }
`;
