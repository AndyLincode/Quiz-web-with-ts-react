import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }  

  html {
    height: 100%;
  } 
  
  body {
    background-color: #fff5de;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> p {
  color: #fff;
  
}

.score {
  color: #ea5514;
  font-size: 1.5rem;
  margin: 0;
}

h1 {
  background: linear-gradient(180deg, #fff, #ea5514);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  filter: drop-shadow(2px 2px #f8b62b);
  font-size: 70px;
  font-weight: 400;
  text-align: center;
  margin: 20px;
}

.start, .next {
  cursor: pointer;
  background: linear-gradient(180deg, #fff, #ffcc91);
  border: 2px solid #d38558;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
  border-radius: 10px;
  height: 40px;
  margin: 20px 0;
  padding: 0 40px;
}

.start {
  max-width: 200px;
}
`