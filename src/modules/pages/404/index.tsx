import { Grid } from "@mui/material";
import BackgroundWithHeader from "./../../components/background-with-header/index";
import { TopContainerInfluencer } from "./styles";

const PageNotFound = () => {
  return (
    <BackgroundWithHeader bg="darkblue">
      <TopContainerInfluencer>
        <h1>404</h1>
        <br />
        Página não encontrada!
      </TopContainerInfluencer>
    </BackgroundWithHeader>
  );
};

export default PageNotFound;
