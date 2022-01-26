import { Grid } from "@mui/material";
import BackgroundWithHeader from "./../../components/background-with-header/index";
import { TopContainerInfluencer } from "./styles";

const PageNotFound = () => {
  return (
    <BackgroundWithHeader bg="darkblue">
      <TopContainerInfluencer
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <h1>404</h1>
        </Grid>
        <Grid item>
          <p>Página não encontrada!</p>
        </Grid>
      </TopContainerInfluencer>
    </BackgroundWithHeader>
  );
};

export default PageNotFound;
