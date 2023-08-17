import compareArrays from "./compareArrays";

const knightMoves = (adjList, visits, startingCoordArray, targetCoordArray) => {

    if (compareArrays(startingCoordArray, targetCoordArray)) {
        let errorMSG = "You cannot select the same tile as the starting and target tile.";
        return errorMSG;
    }

    // navigate through the adjList to starting coordinate

    let elementCounter = 0;
    while (!compareArrays(adjList[elementCounter].vertex,startingCoordArray)) {
        elementCounter++;
    }

    // find index of target coordinate

    let targetCounter = 0;
    while(!compareArrays(adjList[targetCounter].vertex,targetCoordArray)) {
        targetCounter++;
    }

    // begin bfs
    visits[elementCounter] = true;
    let queue = [adjList[elementCounter]];
    let results = [];
    let treeArray = [];
    
    while (queue.length !== 0) {
        let level = [];
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let current = queue.shift();
            let currentIndex = current.index;
            level.push(currentIndex);

            if (currentIndex !== targetCounter) { // if the current index is not equal to the target counter, we loop through current's neighbors
                for (let j = 0; j < current.neighbors.length; j++) { 
                    if (visits[current.neighbors[j].index] === false) {   
                        visits[current.neighbors[j].index] = true; // if node has not been visited, visit it by changing corresponding element in visits array to true
                        queue.push(adjList[current.neighbors[j].index]); // add neighbor to queue

                        // track parent node and coordinates for each visited node in separate array
                        let treeNode = {
                            parent: current.vertex,
                            vertex: current.neighbors[j].vertex,
                        };
                        treeArray.push(treeNode);
                    }
                }
            } else {
                results.push(level);
                let numberOfSteps = results.length - 1;
                let treeCounter = 0;

                // navigate through tree array to the element housing the target node
                while (!compareArrays(treeArray[treeCounter].vertex,targetCoordArray)) {
                    treeCounter++;
                }

                // erase all nodes that appear after the target node from the array to simplify it
                // once you have found the target coordinate, you know that the parent that led to it lies before it, not after. So you can
                // erase everything that comes after to simplify the tree array.
                treeArray = treeArray.slice(0,treeCounter+1);
                treeArray.unshift({parent: null, vertex: startingCoordArray});

                // navigate through the treeArray via the parent property starting at the target coordinates
                let currentNode = treeArray[treeArray.length-1];
                let goldenPath = [];
                goldenPath.push(currentNode.vertex);

                while (currentNode.parent != null) {
                    for (let l = 0; l < treeArray.length; l++) {
                        if (Array.isArray(currentNode.parent)) {
                            if (compareArrays(currentNode.parent,treeArray[l].vertex)) {
                                currentNode = treeArray[l];
                                goldenPath.push(currentNode.vertex);
                            }    
                        }
                    }
                }

                let finalResult = {numberOfSteps, goldenPath}
                return finalResult;
            }
        }
        results.push(level);
    }
};

export default knightMoves;