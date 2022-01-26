import styled from "@emotion/styled";
import { Paper, Grid, TextField, Button } from "@mui/material";
import { GREY_BG_CARD } from "../../../../assets/img";

export const RootContainer = styled.div`
  background-color: #061936;
`;

export const TopContainerInfluencer = styled(Paper)`
  width: 85vw;
  min-width: var(--page-min-width);
  max-width: 1200px;
  padding: 100px 50px;

  @media (max-width: 1200px) {
    padding: 50px;
  }
`;

export const InfluencerProfile = styled(Grid)`
  font-size: 40px;
  border-right: 1px solid #c4c4c4;

  @media (max-width: 1200px) {
    border-bottom: 1px solid #c4c4c4;
    border-right: unset;
    margin-bottom: 50px;
    padding-bottom: 50px;
  }
`;

export const InfluencerName = styled.div`
  font-family: "KG Life is Messy";
`;

export const DonationTitle = styled(Grid)`
  font-family: "KG Life is Messy";
  font-size: 40px;
  text-align: left;

  @media (max-width: 1200px) {
    text-align: center;
  }
`;

export const DonationDescription = styled.div`
  font-size: 22px;
  margin-top: 50px;
  font-family: "Inter Light";
  text-align: left;

  @media (max-width: 1200px) {
    text-align: center;
  }
`;

export const StyleTitleRecurring = styled(Grid)`
  padding: 60px 50px 50px 50px;
  font-family: "KG Life is Messy";
  font-size: 48px;
  color: #ffffff;
  text-align: center;
`;

export const CustomValueTextField = styled(TextField)`
  max-width: 80%;
  input {
    font-family: "KG Life is Messy";
    font-size: 45px;
    color: #00b094;
  }
`;

export const StyleSubtitleDonation = styled.div`
  padding-top: 25px;
  font-family: "Inter Light";
`;

export const StyleCardGoal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

export const StyleCardDonut = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

export const HeaderInfluencer = styled.div`
  height: auto;
  box-shadow: none;
  display: grid;
  place-items: center;
  justify-content: space-around;
  align-items: center;
  justify-items: center;
`;

export const BackgroundImg = styled.div`
  opacity: 80%;
  height: auto;
  padding: 0;
  margin: 0;
  position: absolute;
`;

export const SubTitleAngel = styled.div`
  font-size: 15px;
  font-family: "AvenirLTSd Roman";
  max-width: 520px;
  padding-top: 35px;
`;

export const StyleMoneyIcon = styled(Grid)`
  padding-left: 16px;
`;

export const DonationValueCard = styled(Grid)`
  width: 300px;
  height: 195px;
  background-color: white;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 5px;
  margin: 24px 50px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const DonationValueCardTitle = styled.div`
  width: 100%;
  height: 46px;
  background: #e7e7e7;
  border-radius: 5px 5px 0px 0px;
  display: flex;
  align-items: center;
`;

export const BoxTitleDonate = styled(Grid)`
  font-family: "KG Life is Messy";
  font-size: 25px;
`;

export const StyleReal = styled(Grid)`
  font-family: "KG Life is Messy";
  font-size: 24px;
  padding-right: 8px;
`;

export const StyleValue = styled(Grid)`
  font-family: "KG Life is Messy";
  font-size: 55px;
`;

export const StyleMonth = styled.div`
  font-family: "Inter Light";
  font-size: 20px;
`;

export const StyleTodayValue = styled.div`
  font-family: "Inter Light";
  font-size: 16px;
  padding-top: 10px;
`;

export const StyleTitleGoal = styled(Grid)`
  padding: 60px 50px 50px 50px;
  font-family: "KG Life is Messy";
  font-size: 30px;
  color: #ffffff;
  text-align: center;
  height: 200px;
`;

export const StyleCentralizacion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GFNetwork = styled.div`
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-family: "Inter Light";
  font-size: 32px;
  padding: 100px 50px 50px 50px;
  line-height: 1.6;
`;

export const DivSubmitButton = styled(Button)`
  text-align: center;
  font-size: 22px;
`;

export const StyleBackgroundLast = styled.div`
  opacity: 80%;
  height: auto;
  padding: 0;
  margin: 0;
`;

export const StyleBoxGoal = styled(Grid)`
  width: 90%;
  border-radius: 8px;
  background: #ffffff;
  padding: 50px;
  background-image: url(${GREY_BG_CARD});
  background-size: cover;
  height: 550px;
`;

export const StyleDonut = styled.div`
  flex-direction: column;
  font-family: "Inter Light";
  font-size: 20px;
  align-items: center;
`;

export const StyleBoxValue = styled(Grid)`
  width: 100%;
  height: 130px;
  background: #ffffff;
  border: 3px solid #e7e7e7;
  box-sizing: border-box;
  border-radius: 8px;
  font-family: "KG Life is Messy";
  color: #04c6fb;
  font-size: 40px;
  margin-top: 16px;
`;

export const StyleDonationMonth = styled.div`
  justify-content: center;
  padding-top: 30px;
  font-family: "Inter Light";
  font-size: 18px;
`;
