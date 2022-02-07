import styled from "@emotion/styled";
import { Grid, Paper, RadioGroup, TextField } from "@mui/material";

export const StyleCard = styled.div`
  text-align: center;
`;

export const RegistrationIcon = styled.div`
  margin-bottom: 40px;
`;

export const TitleRegistration = styled.div`
  font-size: 32px;
  font-family: "KG Life is Messy";
  margin-left: 16px;
`;

export const CardPersonType = styled(Grid)`
  border-radius: 8px;
  background-color: #f2f2f2;
  margin: 0px 16px 50px 0px;
`;

export const PersonTypeText2 = styled.span`
  padding-left: 8px;
  color: #975e95;
`;

export const GridNoPadding = styled(Grid)`
  font-size: 18px;
  font-family: "AvenirLTStd Book";
  text-align: right;
  padding: 0px !important;
`;

export const RadioGroupStyled = styled(RadioGroup)`
  flex-direction: row;
  width: 100%;
`;

export const RegistrationForm = styled.div`
  border-radius: 8px;
  margin: 0 !important;
`;

export const StyleDonors = styled.div``;

export const StyleRecurringDonors = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "KG Life is Messy";
  font-size: 32px;
  margin-top: 50px;
`;

export const TitleRecurring = styled.div`
  font-size: 32px;
  font-family: "KG Life is Messy";
  margin-left: 16px;
  text-align: left;
`;

export const PersonIcon = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubTitleDonors = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  font-family: "AvenirLTSd Roman";
  font-weight: 300px;
`;

export const StyleCountDonors = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const StyleButtonsDonors = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonIncremented = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  cursor: pointer;

  :active {
    transform: translateY(4px);
  }
`;

export const ButtonDecremented = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  cursor: pointer;

  :active {
    transform: translateY(4px);
  }
`;

export const StyleCardCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 120px;
  background-color: #ffffff;
  border: solid 1px #000000;
  font-size: 52px;
  font-family: Roboto;
  font-weight: 700;
  color: #2f2d8e;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const DivSubmitButton = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PersonTypePaper = styled(Paper)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 180px;
  height: 100px;
  margin: 8px;

  label {
    margin: 0px;
  }
`;

export const TextFieldTargetDonators = styled(TextField)`
  & .MuiInputBase-root.MuiOutlinedInput-root {
    width: 150px;
    height: 120px;
    font-size: 52px;
    font-family: Roboto;
    font-weight: 700;
    color: #2f2d8e;
  }

  & .MuiInputBase-input.MuiOutlinedInput-input {
    text-align: center;
  }
`;
