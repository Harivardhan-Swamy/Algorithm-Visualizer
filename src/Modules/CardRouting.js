import React,{Component} from 'react';
import { Cards } from './Cards/Cards';
import { Route } from 'react-router';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import Footer from './Footer/Footer';

export class CardRouting extends Component{
    render(){
        return(
            <section>
            <Route path='/' component={Cards} exact />
            <Route path='/Cards'component={Cards} exact/>
            <Route path='/Cards/Pathfinder' component={PathfindingVisualizer} exact/>
            <Route path='/Cards/Sorting' component={Footer}/>
            </section>
        )
    }
} 
export default CardRouting;