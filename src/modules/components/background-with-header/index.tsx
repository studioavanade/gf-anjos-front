import { useCallback, useEffect } from "react";
import { HeaderMobile, HeaderShort } from "../../../assets/img";
import {
  InnerContentContainer,
  TopImage,
  RootContainer,
  Background,
} from "./styles";
import { DARK_BLUE } from "./../../../styles/colors";
import { useMediaQuery } from "@mui/material";
import theme from "../../../theme";

interface IProps {
  bg?: "white" | "darkblue";
  children?: any;
}

const BackgroundWithHeader = ({ bg = "white", children }: IProps) => {
  const isSmallerThan600 = useMediaQuery(theme.breakpoints.down("sm"));

  const getBgColor = useCallback(() => {
    if (bg === "white") return bg;
    else if (bg === "darkblue") return DARK_BLUE;
    return DARK_BLUE;
  }, [bg]);

  useEffect(() => {
    document.body.style.backgroundColor = getBgColor();
  }, [getBgColor]);

  return (
    <RootContainer container direction="column">
      <Background>
        <div
          style={{
            height: "fit-content",
            backgroundColor: DARK_BLUE,
            width: "100%",
          }}
        >
          <TopImage
            src={isSmallerThan600 ? HeaderMobile : HeaderShort}
            alt="banner"
          />
        </div>
      </Background>
      <InnerContentContainer
        container
        item
        alignItems="center"
        direction="column"
        wrap="nowrap"
      >
        {children}
      </InnerContentContainer>
    </RootContainer>
  );
};

export default BackgroundWithHeader;
