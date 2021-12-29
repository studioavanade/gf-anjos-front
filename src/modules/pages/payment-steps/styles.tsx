import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const RootContainer = styled(Grid)`
  margin-top: 330px;
`;

export const TopImage = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  z-index: -1;
`;

export const TopImageBlue = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  top: 0;
  z-index: -2;
  background-color: #061936;
`;

export const PageTitle = styled(Grid)`
  font-size: 44px;
  font-family: "KG Life is Messy";
  color: white;
  m
`;

export const HeaderContainer = styled.div`
  width: 85vw;
  border-radius: 8px;
  height: 187px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e7e7e7;
`;

export const EmailIcon = styled.img`
  display: flex;
  align-items: center;
`;
