import styled from "@emotion/styled";
import { Grid, Table, TableCell } from "@mui/material";
import { DARK_BLUE } from "../../../styles/colors";

export const TopContent = styled(Grid)`
  max-width: 1100px !important;
  padding: 50px;
  background-color: #ffff;
  border-radius: 8px;
  margin: 24px;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const StyleBackground = styled(Grid)`
  background-color: ${DARK_BLUE};
`;

export const TitleInfluencerBox = styled(Grid)`
  font-family: "KG Life is Messy";
  font-size: 32px;
  color: #04c6fb;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 26px;
  }
`;

export const SubTitleInfluencerBox = styled(Grid)`
  margin-top: 32px;
  font-family: "AvenirLTSd Roman";
  max-width: 600px;
  font-size: 20px;
  text-align: center;
`;

export const IconText = styled(Grid)`
  max-width: 350px;
  text-align: center;
  font-family: "AvenirLTSd Roman";
  padding-top: 30px;
`;

export const IconTextSubtitle = styled(Grid)`
  max-width: 250px !important;
`;

export const StyleIcon = styled.div`
  padding-bottom: 10px;
`;

export const StylePharses = styled(Grid)`
  padding-top: 32px;
`;

export const DivSubmitButton = styled(Grid)`
  text-align: center;
  max-width: 450px;
  margin-top: 50px;

  @media (max-width: 600px) {
    font-size: 1rem;
    justify-content: center;
    text-align: center;
  }
`;

export const StyleButtonDialog = styled.div`
  display: flex;
  justify-content: center;
  background: #333333;
  color: #ffffff;
  font-family: "KG Life is Messy";
`;

export const TitleOurInfluencers = styled(Grid)`
  color: #ffffff;
  font-size: 45px;
  font-family: "SuperClarendon Ligth";
  padding-top: 60px;
  padding-bottom: 60px;
  font-weight: 600;
  text-align: center;

  @media (max-width: 600px) {
    display: none;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

export const StyleBackgroundConcession = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TitleYourInfluence = styled(Grid)`
  position: relative;
  color: #ffff;
  font-size: 45px;
  font-family: "SuperClarendon Ligth";
  position: relative;
  padding-top: 40px;
  text-align: center;
`;

export const StylePharseFamily = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptionYourInfluence = styled(Grid)`
  color: #ffffff;
  padding-top: 40px;
  text-align: center;
  line-height: 1.5;
  font-family: "AvenirLTSd Roman";
  font-size: 32px;
  margin: 0px 50px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const StyleBoxRanking = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const PaperCardBox = styled(Grid)`
  background: #ffffff;
  border-radius: 8px;
  margin-top: 100px;
  padding: 50px;

  @media (max-width: 600px) {
    height: 1300px;
  }
`;

export const TitleRanking = styled(Grid)`
  font-family: "KG Life is Messy";
  font-size: 40px;
  text-align: center;
  margin-bottom: 64px;
`;

export const RankingCard = styled(Grid)`
  background: #f0f0f0;
  border-radius: 20px;
  max-width: 600px;
  min-width: 450px;
  padding-bottom: 32px;
`;

export const RankingTable = styled(Table)`
  padding: 10px;
  background: white;
  border-top: 2px solid #989898;
  border-bottom: 2px solid #989898;
  th,
  td {
    font-size: 22px;
  }
`;

export const RankingTableCell = styled(TableCell)(({ bold }: any) => ({
  width: "50%",
  fontWeight: bold ? "bold" : "unset",
}));

export const RankingSpacer = styled(Grid)`
  width: 32px;
  height: 0px;

  @media (max-width: 1200px) {
    width: 0px;
    height: 32px;
  }
`;

export const CardStyleListCompany = styled.div`
  padding: 10px;
  background: white;
  height: 388px;
`;

export const StyleColorText = styled(Grid)`
  color: #ffffff;
  text-align: center;
  font-family: "AvenirLTSd Roman";
  @media (max-width: 600px) {
    padding-top: 20px;
  }
`;

export const RankingHeaderTitle = styled("span")(({ color }: any) => ({
  fontFamily: "KG Life is Messy",
  fontSize: "28px",
  color,
}));

export const RankingHeaderSubtitle = styled.span`
  font-family: "AvenirLTSd Roman";
  font-size: 22px;
  text-align: center;
  letter-spacing: 0.6em;
`;

export const TitleGF = styled.div`
  padding-bottom: 20px;
  font-family: "KG Life is Messy";
  font-size: 50px;
  margin-bottom: 60px;

  @media (max-width: 1200px) {
    text-align: center;
  }
`;

export const SubTitleGF = styled.div`
  text-align: left;
  font-family: "AvenirLTSd Roman";
  font-size: 32px;
  color: "#FFFFFF";
  padding: 50px;
  line-height: 45px;

  @media (max-width: 1200px) {
    text-align: center;
  }
`;

export const VideoContainer = styled(Grid)`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export const StyleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CarouselStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const CarouselSlider = styled.div`
  width: 90%;
  object-fit: cover;
  border-radius: 10px;
  display: block;
`;

export const BackgroundImg = styled.div`
  opacity: 50%;
  position: absolute;
  top: -120px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ItemPhotos = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  height: 401px;
  width: 295px;
  background-color: #00008b;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
  border-radius: 10px;
  cursor: pointer;
`;

export const LoginLink = styled.div`
  color: white !important;
  margin-top: 32px;
  text-align: center;
`;
