export function __Dijkstras__(Grid,Source,Destination) {
 const VisitedNodeInOrder = [];
 Source.Distance=0;
 const UnvisitedNodes = __GetAllNodes__(Grid);
 while (!!UnvisitedNodes.length) {
     __SortNodesByDistance__(UnvisitedNodes);
     const ClosestNode = UnvisitedNodes.shift();
     if(ClosestNode.IsWall) continue;
     if(ClosestNode.Distance === Infinity) return VisitedNodeInOrder;
     ClosestNode.IsVisited = true;  
    VisitedNodeInOrder.push(ClosestNode);
    if(ClosestNode===Destination) return VisitedNodeInOrder;
    __UpdateUnvisitedNeighbours__(ClosestNode,Grid);     
 }   
}
export function __GetNodesInShortestPath__(Destination) {
    const NodesInShortestPath =[];
    let CurrentNode = Destination;
    while (CurrentNode!=null) {
        NodesInShortestPath.unshift(CurrentNode);
        CurrentNode = CurrentNode.Previous
        
    }
  return NodesInShortestPath;  
} 

function __GetAllNodes__(Grid) {
    const Nodes = [];
    for (const Row of Grid){
        for(const Node of Row){
            Nodes.push(Node)
        }
    }
    return Nodes;
}
function __SortNodesByDistance__(UnvisitedNodes){
    UnvisitedNodes.sort((NodeA,NodeB)=>NodeA.Distance - NodeB.Distance);
}
function __UpdateUnvisitedNeighbours__(ClosestNode,Grid){
    const UnvisitedNeighbours = __GetUnvisitedNeighbours__(ClosestNode,Grid);
    for(const Neighbour of UnvisitedNeighbours){
        Neighbour.Distance =ClosestNode.Distance + 1;
        Neighbour.Previous =ClosestNode;
    }
}

function __GetUnvisitedNeighbours__(Node,Grid){

    const Neighbors = [];
    const {Column,Row} = Node;
    if (Row > 0) Neighbors.push(Grid[Row - 1][Column]);
    if (Row < Grid.length - 1) Neighbors.push(Grid[Row + 1][Column]);
    if (Column > 0) Neighbors.push(Grid[Row][Column - 1]);
    if (Column < Grid[0].length - 1) Neighbors.push(Grid[Row][Column + 1]);
    return Neighbors.filter(Neighbor => !Neighbor.IsVisited);
}