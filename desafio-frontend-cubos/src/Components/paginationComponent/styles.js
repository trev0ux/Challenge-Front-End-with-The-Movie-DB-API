import styled from 'styled-components';


export const NumberPage = styled.li`
        list-style-type: none;
        font-size: 28px;
        font-weight: 300;
        margin: 10px;

        &.active {
                content: " ";
                padding: 11px 0px;
                border-radius: 100%;
                border: 3px solid;
                color:#116193 !important;
                background:#116193;
                z-index: -2;

            a{
                color:#00e5e2 !important;
                background:#116193;
                padding: 8px 19px;
                border-radius: 100%;
                font-weight: 400;
                font-size: 32px;
                border: 3px solid;
            }
        }


        a{
            color: #116193;
            text-decoration: none;
        }
`;

export const Pages = styled.ul`
        justify-content: center;
        display: flex;
        align-items: center;
`;


