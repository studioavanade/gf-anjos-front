import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { DARK_BLUE } from "../../../styles/colors";

const minWidth = "700px";

export const RootContainer = styled(Grid)`
  width: 100%;
  height: 100vh;
  background-color: ${DARK_BLUE};
`;

export const OuterContentContainer = styled(Grid)`
  background-color: #fff;
  margin-top: 70px;
  height: 100%;
`;

export const TopContent = styled(Grid)`
  position: relative;
  top: -170px;
`;

export const BottomContent = styled(Grid)`
  position: relative;
  width: 85vw;
  border-radius: 24px;
  background-color: #fff;
  min-width: ${minWidth};
  border: 3px solid #e5e5e5;
  left: -1305.6px;
  top: 229.5px;
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
  margin-bottom: 54px;
`;

export const StepsHeader = styled(Grid)`
  width: 85vw;
  border-radius: 24px;
  height: 187px;
  background-color: #e7e7e7;
  text-align: center;
  min-width: ${minWidth};
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
