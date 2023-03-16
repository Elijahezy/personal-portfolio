import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    overflow-x: hidden;
    font-family: "Segoe UI", serif;

    @media only screen and (-webkit-min-device-pixel-ratio: 2) {
      /* CSS for Safari on iPhone */
      font-family: 'Verdana';
    }
  }
`;