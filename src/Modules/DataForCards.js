import React, { Component } from 'react';
import Image1 from './../Media/Elderflame.png'

export const DataContext = React.createContext();

export class DataForCards extends Component{
    state={
        Methods : [
            {
                "Label":"Pathfinder",
                "Title":"Pathfinding Visualizer",
                "Source":Image1,
                "Description":"Visualize various pathfinding techniques"
            },
            {
                "Label":"Sorting",
                "Title":"Sorting Visualizer",
                "Source":Image1,
                "Description":"Visualize various sorting techniques"
            }
        ]
    }

    render(){
        const {Methods}=this.state;
        return(
            <DataContext.Provider
            value={{Methods}}>
                {this.props.children}
                </DataContext.Provider>
        )
    }
}