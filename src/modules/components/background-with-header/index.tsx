import { useEffect } from "react";
import { HEADER_SHORT } from "../../../assets/img";
import {
  InnerContentContainer,
  TopImage,
  RootContainer,
  Background,
} from "./styles";
import { DARK_BLUE } from "./../../../styles/colors";

interface IProps {
  bg?: "white" | "darkblue";
  children?: any;
}

const BackgroundWithHeader = ({ bg = "white", children }: IProps) => {
  const getBgColor = () => {
    if (bg === "white") return bg;
    else if (bg === "darkblue") return DARK_BLUE;
    return DARK_BLUE;
  };

  useEffect(() => {
    document.body.style.backgroundColor = getBgColor();
  }, []);

  return (
    <RootContainer direction="column">
      <Background>
        <div
          style={{
            height: "fit-content",
            backgroundColor: DARK_BLUE,
            width: "100%",
          }}
        >
          <TopImage src={HEADER_SHORT} alt="banner" />
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
