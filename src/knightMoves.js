const compareArrays = (a, b) => {
    return a.every((val, index) => val === b[index]);
};

const knightMoves = (startingTile, targetTile) => {

    if (startingTile.length !== 2 || targetTile.length !== 2) return "You must provide coordinates with only two dimensions [x,y]";

    for (let i = 0; i < adjList.length; i++) {
        if (compareArrays(adjList[i].vertex, startingTile)) {
            return "we found em";
        }
    }

    return "the coordinates you provided cannot be found";
};