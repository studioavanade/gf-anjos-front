import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const TopContainerInfluencer = styled.div`
  width: 85vw;
  min-width: var(--page-min-width);
  max-width: 1200px;
  padding: 100px 50px;
  height: 70%;
  background-color: white;
  font-size: 2em;
  text-align: center;

  @media (max-width: 1200px) {
    padding: 50px;
  }
`;
