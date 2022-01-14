import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const Container = styled(Paper)`
  width: 85vw;
  padding: 50px 32px;
  min-width: var(--page-min-width);
  border-radius: 10px;

  @media (max-width: 600px) {
    box-shadow: none !important;
    width: 100vw;
    padding: 32px 32px;
  }
`;
