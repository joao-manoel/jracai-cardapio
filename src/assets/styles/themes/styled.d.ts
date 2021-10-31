import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      third: string;

      background: string;

      text: string;
    }

    text: {
      fontFamily: string;
      
      weight:{
        thin: number;
        light: number;
        medium: number;
        extraBold: number;
      }
    }
  }
}

 /*
    Thin 
    Light 
    Medium 
    Extra-bold 800
  */