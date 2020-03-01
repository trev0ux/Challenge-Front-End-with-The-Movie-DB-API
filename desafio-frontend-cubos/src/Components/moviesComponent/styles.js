import styled from 'styled-components';
import { Colors, FontColors } from '../global';



export const MovieCard = styled.div`
    width: 100%;
    height: 25%;
    margin: 35% 0;
    margin-block-start: 15%;
`;


export const Img = styled.div`
    position: absolute;
    float: left;

    img{
    width: 215px;
    height: 318px;
    }
`;

export const Title = styled.div`
    font-family: 'Lato', ;
    color: ${FontColors.fontColor1};
    background-color: ${Colors.primaryColor};
    width: 63vw;
    padding-left: 18%;
    position: absolute;
    height: 12vh;

    h2 {
        font-weight: 500;
        color:#00e5e2;
        font-size: 48px;
        position: relative;
        left: 105px;
        margin: 21px 0;
    }
`;

export const Date = styled.span`
        color:#6d6d6d;
        position: relative; 
        top: -15px;
        left: 106px; 
        font-size: 22px;
        font-weight: 300;
`;

export const Percents = styled.span`
    font-size: 28px;
    border: 4px solid ${FontColors.fontColor1};
    border-radius: 100px;
    padding: 19px 9px;
    background: ${Colors.primaryColor};
    position: absolute;
    top: 30px;

    &:before {
        content: " ";
        border: 4px solid
        #116193;
        border-radius: 100px;
        padding: 39px 39px;
        position: absolute;
        top: -9px;
        left: -8px;
    }
`;


export const Head = styled.div`
    display: inline;
`;

export const Details = styled.div` 
    background-color: #ebebeb;
    width: 81vw;
    position: absolute;
    height: 49%;
    z-index: -2;

    p{
        float: right;
        padding: 10% 30px 10px 22%;
        font-size: 20px;
        color:#6c6c6c;
        font-weight: 400;
    }


`;


export const Tag = styled.span`
    color: ${Colors.primaryColor};
    font-size: 20px; 
    border: 1px solid ${Colors.primaryColor};
    border-radius: 20px;
    padding: 4px 10px;
    position: absolute;
    left: ${props => props.Left || "22%"};
    top: 82%;
    background: #fff;
`;