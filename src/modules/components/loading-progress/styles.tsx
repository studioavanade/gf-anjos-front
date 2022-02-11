import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const LoadingContainer = styled("span")`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(1, 1, 1, 0.7);
  z-index: 99999;
  min-width: var(--page-min-width);
  justify-content: center;
  align-items: center;
`;
