import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: "Verdana", Geneva, Tahoma, sans-serif;

}

html { height: 100%; width: 100%;}

body {
  min-height: 100vh; 
  
}`;
