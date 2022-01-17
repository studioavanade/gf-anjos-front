import CircularProgress from "@mui/material/CircularProgress";
import { LoadingContainer } from "./styles";
import { useSelector } from "react-redux";
import { ApplicationState } from "./../../../store/rootReducer";
import { useEffect } from "react";

const LoadingProgress = () => {
  const loadingState = useSelector((state: ApplicationState) => state.loading);

  useEffect(() => {
    let overflow = "";
    if (loadingState.loading) {
      overflow = "hidden";
    } else {
      overflow = "unset";
    }
    document.body.style.overflowY = overflow;
  }, [loadingState]);

  return (
    <LoadingContainer
      container
      justifyContent="center"
      alignItems="center"
      style={{ display: loadingState.loading ? "flex" : "none" }}
    >
      <CircularProgress size="5vw" />
    </LoadingContainer>
  );
};

export default LoadingProgress;
