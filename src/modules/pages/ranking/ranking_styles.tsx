import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { DARK_BLUE } from "../../../styles/colors";

export const TopContent = styled(Grid)`
  padding-bottom: 50px;
  
`;
export const StyleBackground = styled(Grid)`
background-color: ${DARK_BLUE};
`;
export const CardBoxInfluencer = styled(Grid)`
  width: 1100px;
  height: 500px;
  background-color: #ffff;
  border: 3px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 8px;
  @media (max-width: 600px) {
    font-size: 1rem;
    height: 700px;
  }
`;
export const TitleInfluencerBox = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "KG Life is Messy";
  font-size: 32px;
  color: #04c6fb;
  border-radius: 8px;
  padding-top: 60px;
  @media (max-width: 600px) {
    font-size: 1rem;
    border-radius: 8px;
  }
`;
export const SubTitleInfluencerBox = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  font-family: "AvenirLTSd Roman";
  weight: 500;
  font-size: 20px;
  @media (max-width: 500px) {
    font-size: 1rem;
    justify-content: center;
    text-align: center;
  }
`;
export const StylePharseCreatePage = styled(Grid)`
  max-width: 350px;
  text-align: center;
  font-family: "AvenirLTSd Roman";
  padding-top: 30px;
`;
export const StylePharsePublicizePage = styled(Grid)`
  max-width: 350px;
  text-align: center;
  font-family: "AvenirLTSd Roman";
  padding-top: 30px;
`;
export const StylePharseAmountCollected = styled(Grid)`
  max-width: 350px;
  text-align: center;
  font-family: "AvenirLTSd Roman";
  padding-top: 30px;
`;
export const StyleIcon = styled.div`
  padding-bottom: 10px;
`;
export const StylePharses = styled(Grid)`
padding-top: 60px;
display: flex;
@media (max-width: 500px) {
  flex-direction: column;
  }
`;
export const DivSubmitButton = styled.div`
  position: relative;
  padding-top: 100px;
  text-align: center;
  max-width: 450px;
  @media (max-width: 600px) {
    font-size: 1rem;
    justify-content: center;
    text-align: center;
    padding-bottom: 20px;
  }
`;
export const StyleButtonDialog = styled.div`
  display: flex;
  justify-content: center;
  background: #333333;
  color: #ffffff;
  font-family: "KG Life is Messy";
`;
export const StyleTitleInfluencers = styled.div`
  display: flex;
  justify-content: center;
  color: #ffffff;
  font-size: 45px;
  font-family: "SuperClarendon Ligth";
  padding-top: 30px;
  padding-bottom: 60px;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
export const StyleBackgroundConcession = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const StyleTitleYourInfluencer = styled(Grid)`
  display: center;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #ffff;
  font-size: 45px;
  font-family: "SuperClarendon Ligth";
  position: relative;
  padding-top: 40px;
  @media (max-width: 600px) {
    font-size: 1rem;
    padding-top: 240px;
  }
`;
export const StylePharseFamily = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyleSubTitleFamily = styled.div`
  justify-content: center;
  align-items: center;
  max-width: 650px;
  color: #ffffff;
  position: relative;
  padding-top: 40px;
  text-align: center;
  line-height: 1.5;
  font-family: "AvenirLTSd Roman";
  position: relative;
  font-size: 20px;
  padding-bottom: 60px;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
export const StyleBoxRanking = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;
export const PaperCardBox = styled.div`
  width: 1300px;
  height: 800px;
  background: #ffffff;
  border-radius: 8px;
  padding-top: 35px;
  @media (max-width: 600px) {
    height: 1300px;
  }
`;
export const TitleRanking = styled.div`
  display: flex;
  justify-content: center;
  font-family: "KG Life is Messy";
  font-size: 40px;
  padding-top: 60px;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
export const StyleCardsRanking = styled(Grid)`
padding-top: 50px;
@media (max-width: 600px) {
    font-size: 1rem;
  }
`;
export const CardPhysicalPerson = styled(Grid)`
  background: #f0f0f0;
  border-radius: 24px;
  width: 500px;
  height: 530px;
  padding-bottom: 20px;
  @media (max-width: 600px) {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    
  }
`;
export const CardJuridicalPerson = styled(Grid)`
 
  background: #f0f0f0;
  border-radius: 24px;
  width: 500px;
  height: 530px;
  @media (max-width: 600px) {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
  }
`;
export const IconImgPersons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
export const CardStyleListName = styled.div`
  padding: 10px;
  background: white;
  height: 380px;
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
export const TitleGF = styled.div`
  padding-bottom: 20px;
  font-family: "KG Life is Messy";
  font-size: 50px;
  padding-top: 80px;
  padding-bottom: "30px";
`;
export const StyleSubTitleGF = styled.div`
  max-width: 700px;
  text-align: center;
  justify-content: center;
  font-family: "AvenirLTSd Roman";
  font-size: 25px;
  color: "#FFFFFF";
  padding: 20px;
  padding-top: 50px;
`;
export const StyleMovies = styled(Grid)`
  padding-top: 80px;
  @media (max-width: 600px) {
    width: 300px;
    height: 300px;
  }
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
