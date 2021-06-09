export function dijkstras(grid,source,destination){
    const visitedNodeInOrder = [];
    source.distance = 0;
    const unvisitedNodes = getAllNodes(grid);
    while(!!unvisitedNodes.length){
        sortNodesByDistance(unvisitedNodes);
        const closestNode = unvisitedNodes.shift();
        if(closestNode.isWall) continue;
        if(closestNode.distance === Infinity) return visitedNodeInOrder;
        closestNode.isVisited = true;
        visitedNodeInOrder.push(closestNode);
        if(closestNode===destination) return visitedNodeInOrder;
        updateUnvisitedNeighbours(closestNode,grid);

    }

}

function updateUnvisitedNeighbours(node,grid){
const unvisitedneighbours = getUnvisitedNeighbours(node,grid);
for(const neighbour of unvisitedneighbours){
    neighbour.distance = node.distance + 1;
    neighbour.previous = node;
}

}

function getUnvisitedNeighbours(node,grid){

    const neighbors = [];
    const {column,row} = node;
    if (row > 0) neighbors.push(grid[row - 1][column]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][column]);
    if (column > 0) neighbors.push(grid[row][column - 1]);
    if (column < grid[0].length - 1) neighbors.push(grid[row][column + 1]);
    return neighbors.filter(neighbor => !neighbor.isVisited);
}

function sortNodesByDistance(unvisitedNodes){
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function getAllNodes(grid){
    const nodes =[];
    for(const row of grid){
        for(const node of row){
            nodes.push(node);
        }
    }
    return nodes;
}


export function getNodesInShortestPath(destination){
    const nodesInShortsestPathOrder= [];
    let currentNode = destination ;
    while(currentNode!=null){
        nodesInShortsestPathOrder.unshift(currentNode);
        currentNode = currentNode.previous;

    }
return nodesInShortsestPathOrder
}