const boardCreation = () => {
    
    const board = document.createElement("div");
    board.classList.add("gameBoard");
    const colorA = "white";
    const colorB = "black"

    const createTiles = (board, columnNumber, firstColor, secondColor ) => {
        for (let i = 0; i < 8; i++) {
            let boardTile = document.createElement("div");
            boardTile.classList.add("tile");
            boardTile.setAttribute("id", `${i},${columnNumber}`);
            (i % 2 == 0) ? boardTile.classList.add(`${secondColor}`) : boardTile.classList.add(`${firstColor}`);
            board.appendChild(boardTile); 
        }
    }

    createTiles(board, 0, colorB, colorA);
    createTiles(board, 1, colorA, colorB);
    createTiles(board, 2, colorB, colorA);
    createTiles(board, 3, colorA, colorB);
    createTiles(board, 4, colorB, colorA);
    createTiles(board, 5, colorA, colorB);
    createTiles(board, 6, colorB, colorA);
    createTiles(board, 7, colorA, colorB);

    return board;
};

export default boardCreation;