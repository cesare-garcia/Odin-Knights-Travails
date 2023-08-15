const boardCreation = () => {
    
    const board = document.createElement("div");
    board.classList.add("gameBoard");

    for (let i = 0; i < 8; i++) {
        let boardTile = document.createElement("div");
        boardTile.setAttribute("id", i);
        (i % 2 == 0) ? boardTile.classList.add("blackTile") : boardTile.classList.add("whiteTile");
        board.appendChild(boardTile); 
    }
    
    for (let i = 8; i < 16; i++) {
        let boardTile = document.createElement("div");
        boardTile.setAttribute("id", i);
        (i % 2 == 0) ? boardTile.classList.add("whiteTile") : boardTile.classList.add("blackTile");
        board.appendChild(boardTile); 
    }
    
    for (let i = 16; i < 24; i++) {
        let boardTile = document.createElement("div");
        boardTile.setAttribute("id", i);
        (i % 2 == 0) ? boardTile.classList.add("blackTile") : boardTile.classList.add("whiteTile");
        board.appendChild(boardTile); 
    }
    
    for (let i = 24; i < 32; i++) {
        let boardTile = document.createElement("div");
        boardTile.setAttribute("id", i);
        (i % 2 == 0) ? boardTile.classList.add("whiteTile") : boardTile.classList.add("blackTile");
        board.appendChild(boardTile); 
    }
    
    for (let i = 32; i < 40; i++) {
        let boardTile = document.createElement("div");
        boardTile.setAttribute("id", i);
        (i % 2 == 0) ? boardTile.classList.add("blackTile") : boardTile.classList.add("whiteTile");
        board.appendChild(boardTile); 
    }
    
    for (let i = 40; i < 48; i++) {
        let boardTile = document.createElement("div");
        boardTile.setAttribute("id", i);
        (i % 2 == 0) ? boardTile.classList.add("whiteTile") : boardTile.classList.add("blackTile");
        board.appendChild(boardTile); 
    }
    
    for (let i = 48; i < 56; i++) {
        let boardTile = document.createElement("div");
        boardTile.setAttribute("id", i);
        (i % 2 == 0) ? boardTile.classList.add("blackTile") : boardTile.classList.add("whiteTile");
        board.appendChild(boardTile); 
    }
    
    for (let i = 56; i < 64; i++) {
        let boardTile = document.createElement("div");
        boardTile.setAttribute("id", i);
        (i % 2 == 0) ? boardTile.classList.add("whiteTile") : boardTile.classList.add("blackTile");
        board.appendChild(boardTile); 
    }
    
    return board;
};

export default boardCreation;