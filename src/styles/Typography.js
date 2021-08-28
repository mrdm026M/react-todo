import { createGlobalStyle } from "styled-components";
import MB from "../assets/fonts/Montserrat-Bold.ttf";
import MEB from "../assets/fonts/Montserrat-ExtraBold.ttf";
import MM from "../assets/fonts/Montserrat-Medium.ttf";
import MR from "../assets/fonts/Montserrat-Regular.ttf";
import MSB from "../assets/fonts/Montserrat-SemiBold.ttf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'MB';
    src: url(${MB});
    font-style: normal;
  }
  @font-face {
    font-family: 'MEB';
    src: url(${MEB});
    font-style: normal;
  }
  @font-face {
    font-family: 'MM';
    src: url(${MM});
    font-style: normal;
  }
  @font-face {
    font-family: 'MR';
    src: url(${MR});
    font-style: normal;
  }
  @font-face {
    font-family: 'MSB';
    src: url(${MSB});
    font-style: normal;
  }
`;

export default Typography;
