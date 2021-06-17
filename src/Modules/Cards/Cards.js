import React from 'react';
import CardItem from './CardItem';
import Image1 from '../../Media/Elderflame.png';
import './Cards.css'
import {BrowserRouter as  Router,Switch,Route} from 'react-router-dom';

function Cards(){
    return(
        <div className="Cards">
            
            <p>Placeholder Text</p>
            <div className='CardContainer'>
                <div className='CardWrapper'>
                    <ul className='CardItems'>
                        <CardItem
                        label = 'VisualizerAAAAAAAAAAAA'
                        Source={Image1}
                        Path='/'
                        Description='Visualizer AAAAAAAAAAAAAA'/>
                        <CardItem
                        label = 'Visualizer'
                        Source={Image1}
                        Path='/'
                        Description='Visualizer'/>
                    </ul>
                   
                </div>
            </div>
           
        </div>
    );




}

export default Cards;