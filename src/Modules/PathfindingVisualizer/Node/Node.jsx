import React,{Component} from "react";
import "./Node.css";

class Node extends Component{
    render(){
        const{
            Column,
            IsEnd,
            IsStart,
            Row,
            IsWall,
            onMouseUp,
            onMouseDown,
            onMouseEnter
        }=this.props

        const ExtendedClassName = IsEnd ? 'Node-Destination'  : IsStart ? 'Node-Source' : IsWall ? 'Node-Wall' : '';
        return(
            <div
                id={`node-${Row}-${Column}`}
                className={`Node ${ExtendedClassName}`}
                onMouseDown = {()=>onMouseDown(Row,Column)}
                onMouseEnter = {()=>onMouseEnter(Row,Column)}
                onMouseUp = {()=>onMouseUp(Row,Column)}

            >
                   
            </div>
        );
    };
    
} 

export default Node;