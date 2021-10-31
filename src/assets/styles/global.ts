import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  html, body{
    height: 100vh;
    width: 100vh;
  }

  body{
   background: ${props => props.theme.colors.background};
   color: ${props => props.theme.colors.text};

   font-family: ${props => props.theme.text.fontFamily};
   font-weight: ${props => props.theme.text.weight.medium};
  }


`