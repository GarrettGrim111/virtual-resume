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
  position: relative;
  min-height: 100vh; 

  
    /* display: flex;
    justify-content: center;
  align-items: center;
   overflow: scroll;   */
  
  /* padding: 20px 40px;
  margin: 20px auto; */
  
    

    /* @media (max-width: 800px)
    {
    padding: 10px } */
    
    
    
}`;
