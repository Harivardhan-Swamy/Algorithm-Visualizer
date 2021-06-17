
import React,{Component} from "react";
import Node from './Node/Node';
import './PathfindingVisualizer.css';
import {__Dijkstras__,__GetNodesInShortestPath__} from './Algorithms/Dijkstras'
const Source_Column = 5 
const Source_Row =5 
const Destination_Row = 18 
const Destination_Column = 18


export default class PathfindingVisualizer extends Component{

    constructor(){
        super();
        this.state={
            Grid : [],
            MouseIsPressed : false
        };
        
        

    }
    componentDidMount(){
        const Grid = __CreateGrid__();
        this.setState({Grid});
    }
    __HandleMouseEnter__(Row,Column){
        if(!this.state.MouseIsPressed) return;
        const NewGrid = __CreateGridWithWall__(this.state.Grid,Row,Column);
        this.setState({Grid : NewGrid});

    }
    __HandleMouseDown__(Row,Column){
      
            const NewGrid = __CreateGridWithWall__(this.state.Grid,Row,Column);
            this.setState({Grid : NewGrid,MouseIsPressed:true});
          
        

    }
    __HandleMouseUp__(){
        this.setState({MouseIsPressed:false});
    }

    __AnimateDijkstras__(VisitedNodesInOrder,NodesInShortestPath){
        console.log("Inside animate dijk");
        for(let i =0;i<=VisitedNodesInOrder.length;i++){
            if (i === VisitedNodesInOrder.length) {
                setTimeout(() => {
                    console.log("Inside animate dijk timeout1");
                  this.__AnimateShortestPath__(NodesInShortestPath);
                }, 10 * i);
                return;
              }
              setTimeout(() => {
                const Node = VisitedNodesInOrder[i];
                document.getElementById(`node-${Node.Row}-${Node.Column}`).className =
                  'Node Node-Visited';
              }, 10 * i);
        }
    }
    __AnimateShortestPath__(NodesInShortestPath){
        
        for (let i = 0; i < NodesInShortestPath.length; i++) {
            setTimeout(() => {
              const Node = NodesInShortestPath[i];
              console.log(NodesInShortestPath[i].Row);
              document.getElementById(`node-${Node.Row}-${Node.Column}`).className =
                'Node Node-Shortest-Path';
            }, 50 * i);
          }
    }
    __VisualizeDijkstras__(){
        const{Grid} = this.state;
        const  Source = Grid[Source_Row][Source_Column];
        const Destination = Grid[Destination_Row][Destination_Column];
        const VisitedNodesInOrder = __Dijkstras__(Grid,Source,Destination);
        const NodesInShortestPath = __GetNodesInShortestPath__(Destination);
        this.__AnimateDijkstras__(VisitedNodesInOrder,NodesInShortestPath);
    }


    render(){

        const {Grid,MouseIsPressed} = this.state;
        return(
            <>
            <button onClick = {()=>this.__VisualizeDijkstras__()}>Find the shortest path and visualize</button>
            <div className="Grid">
                
                {Grid.map((Row,RowIdx)=>{

                    return(
                        <div key={RowIdx}>
                        {Row.map((node,nodeIdx)=>{
                            const {Row,Column,IsEnd,IsStart,IsWall} = node;
                            return(
                            <Node
                              key={nodeIdx}
                              Column={Column}
                              Row= {Row}
                              IsEnd={IsEnd}
                              IsWall={IsWall}
                              IsStart={IsStart}
                              MouseIsPressed={MouseIsPressed}
                              onMouseDown={(Row,Column)=>this.__HandleMouseDown__(Row,Column)}
                              onMouseUp={()=>this.__HandleMouseUp__()}
                              onMouseEnter={(Row,Column)=>this.__HandleMouseEnter__(Row,Column)}>
                                 
                            </Node>
                            );
                        })}
                        </div>
                    );
                })}
               
            </div>
            </>
        );

    }
}

const  __CreateGridWithWall__ = (Grid,Row,Column) => {
    var NewGrid = Grid;
    const Node = NewGrid[Row][Column];
    var NewNode =  {
        ...Node,
       
        IsWall : !Node.IsWall
    };
    NewGrid[Row][Column] = NewNode;
    return NewGrid;

}

const __CreateGrid__ = () => {
    const Grid =[];
    for(let Row=0;Row<20;Row++)
    {
        const CurrentRow=[];
        for(let Column=0;Column<60;Column++)
        {
            CurrentRow.push(__CreateNewNode__(Row,Column));
        }
        Grid.push(CurrentRow);
    }
    return Grid;
};

const  __CreateNewNode__ = (Row,Column) => {
    return{
        Column,
        IsStart : Row === Source_Row && Column === Source_Column ,
        IsEnd : Row === Destination_Row && Column === Destination_Column,
        Row,
        IsWall:false,
        Distance : Infinity,
        IsVisited : false,
        Previous : null
    };

}

