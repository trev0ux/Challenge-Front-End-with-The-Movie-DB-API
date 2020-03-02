import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Lato';
  }
`

// GRID
export const Container = styled.div`
    display: grid;
    margin: 5% 10%;
    align-items: center;
    grid-auto-flow: row;
`;

export const Row = styled.div``;


export const Col = styled.div``;





//VARIABLES 

export const FontColors = {
  fontColor1: "#00e5e2"
}

export const Colors = {
  primaryColor: "#116193"
}

export default Container;