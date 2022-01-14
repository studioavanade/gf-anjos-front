import { HEADER_SHORT } from "../../../assets/img";
import {
  InnerContentContainer,
  TopImage,
  RootContainer,
  Background,
} from "./styles";
import { DARK_BLUE } from "./../../../styles/colors";

const BackgroundWithHeader = ({ children }: any) => {
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
        <div style={{ backgroundColor: "white", height: "100%" }} />
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
