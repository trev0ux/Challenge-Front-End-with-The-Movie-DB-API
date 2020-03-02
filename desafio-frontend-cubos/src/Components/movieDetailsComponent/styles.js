import styled from 'styled-components';
import { Percents, Tag} from '../moviesComponent/styles';
import { Colors, FontColors } from '../global';


export const MovieInfo = styled.div`
    padding: 0%;
    font-family: 'Abel';
`;


export const Title = styled.div`
    background-color: #e6e6e6;
    color: ${Colors.primaryColor};
    width: 85%;
    font-size: 42px;
	height: 55px;
	font-weight: 400;
    padding: 10px 7.5%;
    margin-top: 5%;
    grid-area: header;

    span{
        float: right;
        font-size: 20px;
        color:#939393;
        padding-top: 15px;
    }

`;

export const PercentsFilm = styled(Percents)`
        padding: 32px 5px;
        background:
        #116193;
        float: right;
        position: relative;
        right: 70px;
        top: 46%;
        color: ${FontColors.fontColor1};


    a{
        border: 5px solid  #00e5e2;
        padding: 22px 17px;
    }

`;

export const TagFilm = styled(Tag)`
    margin: 6px;
    position: inherit;
    color: ${Colors.primaryColor};
`;

export const Img = styled.div`
    float: right;

    img {
        width: 350px;
        max-width: 100%;
        height: auto;
    }
`;

export const Details = styled.div`
    width: 92.5%;
    padding: 10px 7.5%;
    grid-area: main; 
    background-color: #f2f2f2;
    color: ${Colors.primaryColor};
    padding-right: 0px;
    height: 90vh;

    h3{
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 8px;
    }

    p{
        font-family: 'Lato';
        font-size: 18px;
        color:#5c5c5c;
        font-weight: 500;
    }

    hr{
        width: 65%;
        margin: 0;
        color: #79edeb;
        border: 1px solid;
    }

    li{
        color: ${Colors.primaryColor};
        color: #116193;
        display: inline-block;
        font-size: 24px;
        margin: 10px 30px;
        text-align: center;
        margin-bottom: 10%;

    }

     span{
    display: inline;
    font-size: 20px;
    color: black;
    }

    ul>li:first-child{
            margin-left: -40px;
    }


`;


//GRID




export const Col1 = styled.div`
    grid-area: main;
`;

export const Col2 = styled.div`
    grid-area: right;
`;

export const Row = styled.div`
   height: 90vh;
   width: 90vw;
   margin: 2rem auto;
   grid-template-areas: "header header header"
                        "main right";
   grid-template-rows: 3fr 2fr;
   grid-template-columns: 2fr 1fr;

`;