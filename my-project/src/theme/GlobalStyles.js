import { createGlobalStyle } from "styled-components";

const backgroundColor = "#17182c";
const textColor = "#fff";

export const GlobalStyles = createGlobalStyle`
body {
    background-color: ${backgroundColor};
  }
__text {
color: ${textColor}
}
`;
