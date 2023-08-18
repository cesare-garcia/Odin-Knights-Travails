import boardCreation from "./boardCreation";
// add relevant functions and buttons including: random knight placement and target, manual knight placement and target, travail (which executes knightMoves)
// clear board which deletes knight from board.

const uiCreation = (contentDiv) => {

    const leftHalf = document.createElement("div");
    leftHalf.classList.add("leftHalf");
    const rightHalf = document.createElement("div");
    rightHalf.classList.add("rightHalf");

    // creation of left half of ui
    contentDiv.appendChild(leftHalf);
    const elementsContainer = document.createElement("div");
    elementsContainer.classList.add("elementsContainer");
    leftHalf.appendChild(elementsContainer);
    const projectTitle = document.createElement("h1");
    projectTitle.innerText = "Knights Travails";
    elementsContainer.appendChild(projectTitle);
    const instructionsText = document.createElement("p");
    instructionsText.innerText = `
    Welcome to Knights Travails, the application that will show you 
    the shortest path between any two spaces on the chessboard for 
    a knight. To set the knight's starting position, you can either 
    click a space on the board using your mouse or press the "Place 
    Knight Randomly" button. Placing the knight randomly will 
    automatically clear the board for a new session. Setting the 
    knight manually or randomly will allow you to immediately set
    a target tile by either clicking on another space on the 
    chessboard or pressing the "Choose Random Target" button.
    Finally, you can clear the board by pressing the "Clear" button.`;
    instructionsText.classList.add("instructions");
    elementsContainer.appendChild(instructionsText);
    const gameMessages = document.createElement("p");
    gameMessages.classList.add("gameMessage");
    elementsContainer.appendChild(gameMessages);
    gameMessages.innerText = "Please Select A Starting Tile!"

    for (let i = 0; i < 3; i++) {
        let createdButton = document.createElement("button");
        if (i === 0) {
            createdButton.innerText = "Place Knight Randomly";
            createdButton.classList.add("randomKnight");
        } else if (i === 1) {
            createdButton.innerText = "Choose Random Target";
            createdButton.classList.add("randomTarget");
        } else {
            createdButton.innerText = "Clear";
            createdButton.classList.add("clear");
        } 
        elementsContainer.appendChild(createdButton);
    }
    
    // creation of right half of ui
    contentDiv.appendChild(rightHalf);
    const boardContainer = document.createElement("div");
    boardContainer.classList.add("boardContainer");
    rightHalf.appendChild(boardContainer);
    let gameBoard = boardCreation();
    boardContainer.appendChild(gameBoard);

};

export default uiCreation;