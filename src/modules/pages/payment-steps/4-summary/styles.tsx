import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const CardPersonalOpen = styled(Grid)`
  border: 1px solid #c4c4c4;
  border-radius: 20px;
  background-color: #e5e5e5;
  padding: 16px;
  min-height: 180px;
`;

export const TitleSummary = styled(Grid)`
  font-family: "Roboto Regular";
  font-weight: 400;
  font-size: 24px;
  margin-left: 24px !important;
  margin-bottom: 16px !important;
`;

export const SubtotalText = styled(Grid)`
  font-weight: 400;
  font-family: "Roboto Regular";
  font-size: 24px;
  margin-bottom: 16px;
`;

export const TotalText = styled(Grid)`
  font-weight: 800;
  font-family: "Roboto Regular";
  font-size: 24px;
`;
