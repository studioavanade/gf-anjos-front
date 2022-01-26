import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const TopContainerInfluencer = styled(Grid)`
  width: 85vw;
  min-width: var(--page-min-width);
  max-width: 1200px;
  padding: 100px 50px;
  height: 80%;
  background-color: white;

  @media (max-width: 1200px) {
    padding: 50px;
  }
`;
