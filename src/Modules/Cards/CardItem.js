import {Link} from 'react-router-dom';
import React from 'react';


function CardItem(props){
    return(
        <>
        <li className='CardItem'>
            <a className='CardItemLink' to={props.Path} >
            <figure className='CardItemImageWrapper' data-category={props.label} >
                <img className = 'CardImage'
                alt='Unable To Load Image'
                src ={props.Source} 
                />
            </figure>
            <div className='CardItemInfo'>
                <h5 className='CardItemText'>{props.Description}</h5>
            </div>
            </a>
        </li>




        </>
    );
}

export default CardItem;