import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const LoadingContainer = styled(Grid)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(256, 256, 256, 0.6);
  z-index: 99999;
  position: absolute;
  opacity: 0.5;
  min-width: var(--page-min-width);
`;
