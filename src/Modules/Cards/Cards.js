import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'
import { DataContext } from '../DataForCards';

export class Cards extends Component{
    static  contextType = DataContext;
    render(){
        const {Methods}=this.context
        return(
            <div className="container-static">
            <div id="product">   
                {
                    Methods.map(Method=>(
                        <div className="card" key={Method.Label}>
                           <Link to={`/Cards/${Method.Label}`}>   
                           <img src={Method.Source} alt=""/> 
                           </Link>
                           <div className="content">
                            <h3>
                                <Link to={`/Cards/${Method.Label}`}>
                                {Method.Title}</Link>
                            </h3>
                            <p className="description">{Method.Description}</p>
                           
                            </div> 
                        </div>
                    ))
                }
            </div>
            </div>
        )


    }
}

export default Cards