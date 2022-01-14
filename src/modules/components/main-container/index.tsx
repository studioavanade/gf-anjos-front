import useMediaQuery from "@mui/material/useMediaQuery";
import { Container } from "./styles";

const MainContainer = ({ maxWidth, children }: any) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Container
      elevation={12}
      style={{ maxWidth: !isMobile ? maxWidth : "unset" }}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
