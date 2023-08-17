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
    instructionsText.innerText = "Choose an action.";
    instructionsText.classList.add("instructions");
    elementsContainer.appendChild(instructionsText);

    for (let i = 0; i < 3; i++) {
        let createdButton = document.createElement("button");
        if (i === 0) createdButton.innerText = "Place Knight Randomly";
        if (i === 1) createdButton.innerText = "Choose Random Target";
        if (i === 2) createdButton.innerText = "Clear";
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