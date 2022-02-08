import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const RootContainer = styled(Grid)`
  width: 100%;
  height: 100vh;
  min-width: var(--page-min-width);
`;

export const Background = styled.div`
  height: 100%;
  position: absolute;
  z-index: -10;
  width: 100%;
`;

export const InnerContentContainer = styled(Grid)`
  height: 100%;
  padding-top: 12vw;

  & .MuiGrid-root {
    margin: 0;
  }

  @media (max-width: 600px) {
    padding-top: 60vw;
  }
`;

export const TopImage = styled.img`
  width: 100%;
  height: auto;
  min-width: var(--page-min-width);
`;
