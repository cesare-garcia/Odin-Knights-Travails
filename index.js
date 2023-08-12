const content = document.querySelector("#content");
const boardContainer = document.createElement("div");
const gameBoard = document.querySelector("div");
gameBoard.classList.add("gameBoard");

for (let i = 0; i < 8; i++) {
    let boardTile = document.createElement("div");
    (i % 2 == 0) ? boardTile.classList.add("blackTile") : boardTile.classList.add("whiteTile");
    gameBoard.appendChild(boardTile); 
}

for (let i = 8; i < 16; i++) {
    let boardTile = document.createElement("div");
    (i % 2 == 0) ? boardTile.classList.add("whiteTile") : boardTile.classList.add("blackTile");
    gameBoard.appendChild(boardTile); 
}

for (let i = 16; i < 24; i++) {
    let boardTile = document.createElement("div");
    (i % 2 == 0) ? boardTile.classList.add("blackTile") : boardTile.classList.add("whiteTile");
    gameBoard.appendChild(boardTile); 
}

for (let i = 24; i < 32; i++) {
    let boardTile = document.createElement("div");
    (i % 2 == 0) ? boardTile.classList.add("whiteTile") : boardTile.classList.add("blackTile");
    gameBoard.appendChild(boardTile); 
}

for (let i = 32; i < 40; i++) {
    let boardTile = document.createElement("div");
    (i % 2 == 0) ? boardTile.classList.add("blackTile") : boardTile.classList.add("whiteTile");
    gameBoard.appendChild(boardTile); 
}

for (let i = 40; i < 48; i++) {
    let boardTile = document.createElement("div");
    (i % 2 == 0) ? boardTile.classList.add("whiteTile") : boardTile.classList.add("blackTile");
    gameBoard.appendChild(boardTile); 
}

for (let i = 48; i < 56; i++) {
    let boardTile = document.createElement("div");
    (i % 2 == 0) ? boardTile.classList.add("blackTile") : boardTile.classList.add("whiteTile");
    gameBoard.appendChild(boardTile); 
}

for (let i = 56; i < 64; i++) {
    let boardTile = document.createElement("div");
    (i % 2 == 0) ? boardTile.classList.add("whiteTile") : boardTile.classList.add("blackTile");
    gameBoard.appendChild(boardTile); 
}



content.appendChild(boardContainer);

