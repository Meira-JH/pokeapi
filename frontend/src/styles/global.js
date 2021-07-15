import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: "NibPro";
    src: url("/static/fonts/NibPro/NibPro-Light.ttf");
    font-style: normal;
    font-weight: 100;
    font-display: swap;
  }
  @font-face {
    font-family: "NibPro";
    src: url("/static/fonts/NibPro/NibPro-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "NibPro";
    src: url("/static/fonts/NibPro/NibPro-SemiBold.ttf");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "NibPro";
    src: url("/static/fonts/NibPro/NibPro-Bold.ttf");
    font-style: normal;
    font-weight: 900;
    font-display: swap;
  }
  @font-face {
    font-family: "NibPro";
    src: url("/static/fonts/NibPro/NibPro-BoldItalic.ttf");
    font-style: italic;
    font-weight: 900;
    font-display: swap;
  }


  * {
    margin: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: MaisonNeue, NibPro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, sans-serif;
    font-weight: 400;
  }



  ${({ theme }) => css`
    html {
      font-family: ${theme.font.family};
      font-size: 62.5%;
      scroll-behavior: smooth;
    }
    body {
      background-color: ${theme.colors.white};
      color: ${theme.colors.boxBg};
      font-size: ${theme.font.sizes.small};
    }

    span::selection {
      background: ${theme.colors.primary};
      color: #ffffff;
    }

    p::selection {
      background: ${theme.colors.primary};
      color: #ffffff;
    }

    h1::selection {
      background: ${theme.colors.primary};
      color: #ffffff;
    }

  
    h2::selection {
      background: ${theme.colors.primary};
      color: #ffffff;
    }

    h3{
      color: black;
      font-family: ${theme.font.primary};
      margin: 50px;
    }

    h3::selection {
      background: ${theme.colors.primary};
      color: #ffffff;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }

    .flex {
      display: flex;
    }

    .justify-between {
      display: flex;
      justify-content: space-between;
    }
  `}
`;


export default GlobalStyles;
