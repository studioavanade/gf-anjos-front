import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const CardPaymentOpen = styled(Grid)`
  border: 1px solid #c4c4c4;
  border-radius: 20px;
  padding: 16px;
`;

export const TitlePayment = styled.div`
  font-family: "Roboto Regular";
  font-weight: 400;
  font-size: 24px;
  margin-left: 24px;
`;

export const CardCredit = styled(Grid)`
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  margin-top: 32px;
  margin-left: 0px;
  width: 100%;
  padding: 16px 0px;

  .MuiGrid-item {
    padding-top: 0;
  }
`;

export const DivSubmitButton = styled(Grid)`
  padding-top: 64px;
  padding-bottom: 64px;
  border-bottom: 1px solid black;
`;
