import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
    height: 100vh;
    width: 100vw;
  }

  @media (max-width: 1080px){
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px){
    html {
      font-size: 87.5%;
    }
  }

  body{
   background: ${props => props.theme.colors.background};
   color: ${props => props.theme.colors.text};

   font-family: ${props => props.theme.text.fontFamily};
   font-weight: ${props => props.theme.text.weight.medium};
  }

  a{
    color: inherit;
    text-decoration: none;
  }


`