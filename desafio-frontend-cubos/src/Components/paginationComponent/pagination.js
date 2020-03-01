import React from 'react';
import {Pages, NumberPage} from './styles';
import { Link } from "react-router-dom";


const Pagination = (props) => {
   const pageLinks = []
   
   for(let i = 1; i <= 5; i++) {
       let active = props.currentPage == i ? 'active' : '';

   pageLinks.push(<NumberPage className={active} key={i} onClick={() => props.nextPage(i)}> <a href="#">{i}</a> </NumberPage>)
   
    }

    return(
        <Pages>
            { pageLinks }
        </Pages>
        
    )

}

export default Pagination;

// restam o active e criar as classes styled components