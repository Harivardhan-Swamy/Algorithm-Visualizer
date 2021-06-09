import React, { Component }  from 'react'

import './Node.css';


export default class Node extends Component{

    render(){

        const{
            column,
            isEnd,
            isStart,
            row,
            isWall,
            onMouseDown,
            onMouseUp,
            onMouseEnter
        }=this.props;

        const extendedClassName=isEnd ?'node-destination' : isStart ?  'node-source' : isWall ? 'node-wall' :'';



        return(<div 
                    id ={`node-${row}-${column}`}
                    className={`node ${extendedClassName}`}
                    onMouseDown={()=>onMouseDown(row,column)}
                    onMouseEnter={()=>onMouseEnter(row.column)}
                    onMouseUp ={()=>onMouseUp(row,column)}
                    >



        </div>
        );

    }

}
