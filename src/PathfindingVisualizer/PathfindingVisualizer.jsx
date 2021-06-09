import React,{Component} from 'react';
import Node from './Node/Node.jsx';
import './PathfindingVisualizer.css';
import {dijkstras,getNodesInShortestPath} from '../Algorithms/dijkstras';
const START_ROW = 5;                              //---------------Change start and end node coordiantes here---------------//
const START_COLUMN = 5;
const END_ROW = 15;
const END_COLUMN = 20;


export default class PathfindingVisualizer extends Component{

constructor(){
    super();
    this.state={
        grid:[],
        mouseIsPressed: false
    };
}


componentDidMount(){
    const grid = createGrid();
    this.setState({grid});

}
handleMouseDown(row,column){
    const newGrid = createNewGridWithWall(this.state.grid,row,column);
    this.setState({grid : newGrid , mouseIsPressed : true});
}


handleMouseEnter(row,column){

    //if(!this.state.mouseIsPressed) return;
    //const newGrid = createNewGridWithWall(this.state.grid,row,column);
    //this.setState({grid : newGrid });


}


handleMouseUp(){
    this.setState({mouseIsPressed:false});
}

animateDijkstras(visitedNodesInOrder,nodesInShortestPath){

    for(let i =0;i<=visitedNodesInOrder.length;i++){
        if (i === visitedNodesInOrder.length) {
            setTimeout(() => {
              this.animateShortestPath(nodesInShortestPath);
            }, 10 * i);
            return;
          }
          setTimeout(() => {
            const node = visitedNodesInOrder[i];
            document.getElementById(`node-${node.row}-${node.column}`).className =
              'node node-visited';
          }, 10 * i);
    }
}

animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.column}`).className =
          'node node-shortest-path';
      }, 50 * i);
    }
  }

VisualizeDijkstras(){
    const {grid} = this.state;
    const source = grid[START_ROW][START_COLUMN];
    const destination  = grid[END_ROW][END_COLUMN];
    const visitedNodesInOrder = dijkstras(grid,source,destination);
    const nodesInShortestPath = getNodesInShortestPath(destination);
    this.animateDijkstras(visitedNodesInOrder, nodesInShortestPath);
}

render(){
    const {grid,mouseIsPressed}= this.state;
    return(
    <>
    <button onClick= {() => this.VisualizeDijkstras()}>Visualize Dijkstras</button>
    <div className="grid">

        {grid.map((row,rowIdx)=>{
            return(
                <div key ={rowIdx} >
                {row.map((node,nodeIdx)=>{
                    const {row,column,isEnd,isStart,isWall} = node;
                    return(
                        <Node 
                        key= {nodeIdx} 
                        column={column} 
                        row = {row}
                        isEnd = {isEnd}
                        isWall = {isWall}
                        isStart = {isStart}
                        mouseIsPressed = {mouseIsPressed}
                        onMouseDown = {(row,column)=>{this.handleMouseDown(row,column)}}
                        onMouseUp =  {()=>{this.handleMouseUp()}}
                        onMouseEnter = {(row,column)=>{this.handleMouseEnter(row,column)}}
                        ></Node>
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


const createGrid = () =>{
    const grid = [];
    for(let row=0;row<20;row++){                           //-------------Change row and column values here--------------//
        const currentRow =[];
        for(let column=0;column<60;column++){
            currentRow.push(createNewNode(row,column));
        }
        grid.push(currentRow);
    }


    return grid;
};

const createNewNode = (row,column) =>{
    return {
            column,
            isEnd : row === END_ROW && column === END_COLUMN,
            isStart : row ===START_ROW && column === START_COLUMN,
            row,
            isWall: false,
            distance: Infinity,
            isVisited: false,
            previous : null
            
            
    };

};

const  createNewGridWithWall = (grid,row,column)=>{
    var newgrid = grid.slice();
    const node = newgrid[row][column];
    var newnode = {
        ...node,
        isWall : !node.isWall,
    };
    newgrid[row][column] = newnode;
    return newgrid;
};