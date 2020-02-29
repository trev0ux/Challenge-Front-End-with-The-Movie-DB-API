import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Abel', ;
    src: url('https://fonts.googleapis.com/css?family=Abel&display=swap');
  }
`

export const Container = styled.div`
    display: grid;
    margin: 5% 10%;
    align-items: center;
    grid-auto-flow: row;
`;


//VARIABLES 

export const FontColors = {
  fontColor1: "#00e5e2"
}

export const Colors = {
  primaryColor: "#116193"
}

export default FontColors;