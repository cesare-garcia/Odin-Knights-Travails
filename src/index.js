import './style.css';
import uiCreation from './uiCreation';
import boardCreation from "./boardCreation";
import compareArrays from './compareArrays';
import knightMoves from './knightMoves';
import KnightOne from './futuristicChessKnight1.png';
import KnightTwo from './futuristicChessKnight2.png';


const content = document.querySelector("#content");
// ui creation
uiCreation(content);

let startingCoordinates = "";
let startStatus = false;
let startTileElement;
let targetCoordinates = "";
let targetStatus = false;
let targetTileElement;

const manualKnight = new Image(49,49);
manualKnight.classList.add("mknight");
manualKnight.src = KnightOne;

let visitedArray = [];
for (let i = 0; i < 64; i++) {
    visitedArray[i] = false;
};

const adjList = [
    {
        index: 0,
        vertex: [0,0],
        neighbors: [
            {
                parent: [0,0],
                vertex: [2,1],
                index: 10
            },
            {
                parent: [0,0],
                vertex: [1,2],
                index: 17
            },
        ]
    },
    {
        index: 1,
        vertex: [1,0],
        neighbors: [
            {
                parent: [1,0],
                vertex: [0,2],
                index: 16
            },
            {
                parent: [1,0],
                vertex: [2,2],
                index: 18
            },
            {
                parent: [1,0],
                vertex: [3,1],
                index: 11
            }    
        ]
    },
    {
        index: 2,
        vertex: [2,0],
        neighbors: [
            {
                parent: [2,0],
                vertex: [0,1],
                index: 8
            },
            {
                parent: [2,0],
                vertex: [1,2],
                index: 17
            },
            {
                parent: [2,0],
                vertex: [3,2],
                index: 19
            },
            {
                parent: [2,0],
                vertex: [4,1],
                index: 12
            }    
        ]
    },
    {
        index: 3,
        vertex: [3,0],
        neighbors: [
            {
                parent: [3,0],
                vertex: [1,1],
                index: 9
            },
            {
                parent: [3,0],
                vertex: [2,2],
                index: 18
            },
            {
                parent: [3,0],
                vertex: [4,2],
                index: 20
            },
            {
                parent: [3,0],
                vertex: [5,1],
                index: 13
            }
        ]
    },
    {
        index: 4,
        vertex: [4,0],
        neighbors: [
            {
                parent: [4,0],
                vertex: [2,1],
                index: 10
            },
            {
                parent: [4,0],
                vertex: [3,2],
                index: 19
            },
            {
                parent: [4,0],
                vertex: [5,2],
                index: 21
            },
            {
                parent: [4,0],
                vertex: [6,1],
                index: 14
            }
        ]
    },
    {
        index: 5,
        vertex: [5,0],
        neighbors: [
            {
                parent: [5,0],
                vertex: [3,1],
                index: 11
            },
            {
                parent: [5,0],
                vertex: [4,2],
                index: 20
            },
            {
                parent: [5,0],
                vertex: [6,2],
                index: 22
            },
            {
                parent: [5,0],
                vertex: [7,1],
                index: 15
            }
        ]
    },
    {
        index: 6,
        vertex: [6,0],
        neighbors: [
            {
                parent: [6,0],
                vertex: [4,1],
                index: 12
            },
            {
                parent: [6,0],
                vertex: [5,2],
                index: 21
            },
            {
                parent: [6,0],
                vertex: [7,2],
                index: 23
            }
        ]
    },
    {
        index: 7,
        vertex: [7,0],
        neighbors: [
            {
                parent: [7,0],
                vertex: [5,1],
                index: 13
            },
            {
                parent: [7,0],
                vertex: [6,2],
                index: 22
            },
        ]
    },
    {
        index: 8,
        vertex: [0,1],
        neighbors: [
            {
                parent: [0,1],
                vertex: [2,0],
                index: 2
            },
            {
                parent: [0,1],
                vertex: [2,2],
                index: 18
            },
            {
                parent: [0,1],
                vertex: [1,3],
                index: 25
            }
        ]
    },
    {
        index: 9,
        vertex: [1,1],
        neighbors: [
            {
                parent: [1,1],
                vertex: [3,0],
                index: 3
            },
            {
                parent: [1,1],
                vertex: [3,2],
                index: 19
            },
            {
                parent: [1,1],
                vertex: [2,3],
                index: 26
            },
            {
                parent: [1,1],
                vertex: [0,3],
                index: 24
            }
        ]
    },
    {
        index: 10,
        vertex: [2,1],
        neighbors: [
            {
                parent: [2,1],
                vertex: [4,0],
                index: 4
            },
            {
                parent: [2,1],
                vertex: [4,2],
                index: 20
            },
            {
                parent: [2,1],
                vertex: [3,3],
                index: 27
            },
            {
                parent: [2,1],
                vertex: [1,3],
                index: 25
            },
            {
                parent: [2,1],
                vertex: [0,2],
                index: 16
            },
            {
                parent: [2,1],
                vertex: [0,0],
                index: 0
            }
        ]
    },
    {
        index: 11,
        vertex: [3,1],
        neighbors: [
            {
                parent: [3,1],
                vertex: [5,0],
                index: 5
            },
            {
                parent: [3,1],
                vertex: [5,2],
                index: 21
            },
            {
                parent: [3,1],
                vertex: [4,3],
                index: 28
            },
            {
                parent: [3,1],
                vertex: [2,3],
                index: 26
            },
            {
                parent: [3,1],
                vertex: [1,2],
                index: 17
            },
            {
                parent: [3,1],
                vertex: [1,0],
                index: 1
            }
        ]
    },
    {
        index: 12,
        vertex: [4,1],
        neighbors: [
            {
                parent: [4,1],
                vertex: [6,0],
                index: 6
            },
            {
                parent: [4,1],
                vertex: [6,2],
                index: 22
            },
            {
                parent: [4,1],
                vertex: [5,3],
                index: 29
            },
            {
                parent: [4,1],
                vertex: [3,3],
                index: 27
            },
            {
                parent: [4,1],
                vertex: [2,2],
                index: 18
            },
            {
                parent: [4,1],
                vertex: [2,0],
                index: 2
            }
        ]
    },
    {
        index: 13,
        vertex: [5,1],
        neighbors: [
            {
                parent: [5,1],
                vertex: [7,0],
                index: 7
            },
            {
                parent: [5,1],
                vertex: [7,2],
                index: 23
            },
            {
                parent: [5,1],
                vertex: [6,3],
                index: 30
            },
            {
                parent: [5,1],
                vertex: [4,3],
                index: 28
            },
            {
                parent: [5,1],
                vertex: [3,2],
                index: 19
            },
            {
                parent: [5,1],
                vertex: [3,0],
                index: 3
            }
        ]
    },
    {
        index: 14,
        vertex: [6,1],
        neighbors: [
            {
                parent: [6,1],
                vertex: [7,3],
                index: 31
            },
            {
                parent: [6,1],
                vertex: [5,3],
                index: 29
            },
            {
                parent: [6,1],
                vertex: [4,2],
                index: 20
            },
            {
                parent: [6,1],
                vertex: [4,0],
                index: 4
            }
        ]
    },
    {
        index: 15,
        vertex: [7,1],
        neighbors: [
            {
                parent: [7,1],
                vertex: [6,3],
                index: 30
            },
            {
                parent: [7,1],
                vertex: [5,2],
                index: 21
            },
            {
                parent: [7,1],
                vertex: [5,0],
                index: 5
            }
        ]
    },
    {
        index: 16,
        vertex: [0,2],
        neighbors: [
            {
                parent: [0,2],
                vertex: [1,4],
                index: 33
            },
            {
                parent: [0,2],
                vertex: [2,3],
                index: 26
            },
            {
                parent: [0,2],
                vertex: [2,1],
                index: 10
            },
            {
                parent: [0,2],
                vertex: [1,0],
                index: 1
            }
        ]
    },
    {
        index: 17,
        vertex: [1,2],
        neighbors: [
            {
                parent: [1,2],
                vertex: [2,4],
                index: 34
            },
            {
                parent: [1,2],
                vertex: [3,3],
                index: 27
            },
            {
                parent: [1,2],
                vertex: [3,1],
                index: 11
            },
            {
                parent: [1,2],
                vertex: [2,0],
                index: 2
            },
            {
                parent: [1,2],
                vertex: [0,0],
                index: 0
            },
            {
                parent: [1,2],
                vertex: [0,4],
                index: 32
            }
        ]
    },
    {
        index: 18,
        vertex: [2,2],
        neighbors: [
            {
                parent: [2,2],
                vertex: [3,4],
                index: 35
            },
            {
                parent: [2,2],
                vertex: [4,3],
                index: 28
            },
            {
                parent: [2,2],
                vertex: [4,1],
                index: 12
            },
            {
                parent: [2,2],
                vertex: [3,0],
                index: 3
            },
            {
                parent: [2,2],
                vertex: [1,0],
                index: 1
            },
            {
                parent: [2,2],
                vertex: [0,1],
                index: 8
            },
            {
                parent: [2,2],
                vertex: [0,3],
                index: 24
            },
            {
                parent: [2,2],
                vertex: [1,4],
                index: 33
            }
        ]
    },
    {
        index: 19,
        vertex: [3,2],
        neighbors: [
            {
                parent: [3,2],
                vertex: [4,4],
                index: 36
            },
            {
                parent: [3,2],
                vertex: [5,3],
                index: 29
            },
            {
                parent: [3,2],
                vertex: [5,1],
                index: 13
            },
            {
                parent: [3,2],
                vertex: [4,0],
                index: 4
            },
            {
                parent: [3,2],
                vertex: [2,0],
                index: 2
            },
            {
                parent: [3,2],
                vertex: [1,1],
                index: 9
            },
            {
                parent: [3,2],
                vertex: [1,3],
                index: 25
            },
            {
                parent: [3,2],
                vertex: [2,4],
                index: 34
            }
        ]
    },
    {
        index: 20,
        vertex: [4,2],
        neighbors: [
            {
                parent: [4,2],
                vertex: [5,4],
                index: 37
            },
            {
                parent: [4,2],
                vertex: [6,3],
                index: 30
            },
            {
                parent: [4,2],
                vertex: [6,1],
                index: 14
            },
            {
                parent: [4,2],
                vertex: [5,0],
                index: 5
            },
            {
                parent: [4,2],
                vertex: [3,0],
                index: 3
            },
            {
                parent: [4,2],
                vertex: [2,1],
                index: 10
            },
            {
                parent: [4,2],
                vertex: [2,3],
                index: 26
            },
            {
                parent: [4,2],
                vertex: [3,4],
                index: 35
            }
        ]
    },
    {
        index: 21,
        vertex: [5,2],
        neighbors: [
            {
                parent: [5,2],
                vertex: [6,4],
                index: 38
            },
            {
                parent: [5,2],
                vertex: [7,3],
                index: 31
            },
            {
                parent: [5,2],
                vertex: [7,1],
                index: 15
            },
            {
                parent: [5,2],
                vertex: [6,0],
                index: 6
            },
            {
                parent: [5,2],
                vertex: [4,0],
                index: 4
            },
            {
                parent: [5,2],
                vertex: [3,1],
                index: 11
            },
            {
                parent: [5,2],
                vertex: [3,3],
                index: 27
            },
            {
                parent: [5,2],
                vertex: [4,4],
                index: 36
            }
        ]
    },
    {
        index: 22,
        vertex: [6,2],
        neighbors: [
            {
                parent: [6,2],
                vertex: [7,4],
                index: 39
            },
            {
                parent: [6,2],
                vertex: [7,0],
                index: 7
            },
            {
                parent: [6,2],
                vertex: [5,0],
                index: 5
            },
            {
                parent: [6,2],
                vertex: [4,1],
                index: 12
            },
            {
                parent: [6,2],
                vertex: [4,3],
                index: 28
            },
            {
                parent: [6,2],
                vertex: [5,4],
                index: 37
            },
        ]
    },
    {
        index: 23,
        vertex: [7,2],
        neighbors: [
            {
                parent: [7,2],
                vertex: [6,0],
                index: 6
            },
            {
                parent: [7,2],
                vertex: [5,1],
                index: 13
            },
            {
                parent: [7,2],
                vertex: [5,3],
                index: 29
            },
            {
                parent: [7,2],
                vertex: [6,4],
                index: 38
            },
        ]
    },
    {
        index: 24,
        vertex: [0,3],
        neighbors: [
            {
                parent: [0,3],
                vertex: [1,5],
                index: 41
            },
            {
                parent: [0,3],
                vertex: [2,4],
                index: 34
            },
            {
                parent: [0,3],
                vertex: [2,2],
                index: 18
            },
            {
                parent: [0,3],
                vertex: [1,1],
                index: 9
            },
        ]
    },
    {
        index: 25,
        vertex: [1,3],
        neighbors: [
            {
                parent: [1,3],
                vertex: [2,5],
                index: 42
            },
            {
                parent: [1,3],
                vertex: [3,4],
                index: 35
            },
            {
                parent: [1,3],
                vertex: [3,2],
                index: 19
            },
            {
                parent: [1,3],
                vertex: [2,1],
                index: 10
            },
            {
                parent: [1,3],
                vertex: [0,1],
                index: 8
            },
            {
                parent: [1,3],
                vertex: [0,5],
                index: 40
            },
        ]
    },
    {
        index: 26,
        vertex: [2,3],
        neighbors: [
            {
                parent: [2,3],
                vertex: [3,5],
                index: 43
            },
            {
                parent: [2,3],
                vertex: [4,4],
                index: 36
            },
            {
                parent: [2,3],
                vertex: [4,2],
                index: 20
            },
            {
                parent: [2,3],
                vertex: [3,1],
                index: 11
            },
            {
                parent: [2,3],
                vertex: [1,1],
                index: 9
            },
            {
                parent: [2,3],
                vertex: [0,2],
                index: 16
            },
            {
                parent: [2,3],
                vertex: [0,4],
                index: 32
            },
            {
                parent: [2,3],
                vertex: [1,5],
                index: 41
            }
        ]
    },
    {
        index: 27,
        vertex: [3,3],
        neighbors: [
            {
                parent: [3,3],
                vertex: [4,5],
                index: 44
            },
            {
                parent: [3,3],
                vertex: [5,4],
                index: 37
            },
            {
                parent: [3,3],
                vertex: [5,2],
                index: 21
            },
            {
                parent: [3,3],
                vertex: [4,1],
                index: 12
            },
            {
                parent: [3,3],
                vertex: [2,1],
                index: 10
            },
            {
                parent: [3,3],
                vertex: [1,2],
                index: 17
            },
            {
                parent: [3,3],
                vertex: [1,4],
                index: 33
            },
            {
                parent: [3,3],
                vertex: [2,5],
                index: 42
            }
        ]
    },
    {
        index: 28,
        vertex: [4,3],
        neighbors: [
            {
                parent: [4,3],
                vertex: [5,5],
                index: 45
            },
            {
                parent: [4,3],
                vertex: [6,4],
                index: 38
            },
            {
                parent: [4,3],
                vertex: [6,2],
                index: 22
            },
            {
                parent: [4,3],
                vertex: [5,1],
                index: 13
            },
            {
                parent: [4,3],
                vertex: [3,1],
                index: 11
            },
            {
                parent: [4,3],
                vertex: [2,2],
                index: 18
            },
            {
                parent: [4,3],
                vertex: [2,4],
                index: 34
            },
            {
                parent: [4,3],
                vertex: [3,5],
                index: 43
            }
        ]
    },
    {
        index: 29,
        vertex: [5,3],
        neighbors: [
            {
                parent: [5,3],
                vertex: [6,5],
                index: 46
            },
            {
                parent: [5,3],
                vertex: [7,4],
                index: 39
            },
            {
                parent: [5,3],
                vertex: [7,2],
                index: 23
            },
            {
                parent: [5,3],
                vertex: [6,1],
                index: 14
            },
            {
                parent: [5,3],
                vertex: [4,1],
                index: 12
            },
            {
                parent: [5,3],
                vertex: [3,2],
                index: 19
            },
            {
                parent: [5,3],
                vertex: [3,4],
                index: 35
            },
            {
                parent: [5,3],
                vertex: [4,5],
                index: 44
            }
        ]
    },
    {
        index: 30,
        vertex: [6,3],
        neighbors: [
            {
                parent: [6,3],
                vertex: [7,5],
                index: 47
            },
            {
                parent: [6,3],
                vertex: [7,1],
                index: 15
            },
            {
                parent: [6,3],
                vertex: [5,1],
                index: 13
            },
            {
                parent: [6,3],
                vertex: [4,2],
                index: 20
            },
            {
                parent: [6,3],
                vertex: [4,4],
                index: 36
            },
            {
                parent: [6,3],
                vertex: [5,5],
                index: 45
            },
        ]
    },
    {
        index: 31,
        vertex: [7,3],
        neighbors: [
            {
                parent: [7,3],
                vertex: [6,1],
                index: 14
            },
            {
                parent: [7,3],
                vertex: [5,2],
                index: 21
            },
            {
                parent: [7,3],
                vertex: [5,4],
                index: 37
            },
            {
                parent: [7,3],
                vertex: [6,5],
                index: 46
            },
        ]
    },
    {
        index: 32,
        vertex: [0,4],
        neighbors: [
            {
                parent: [0,4],
                vertex: [1,6],
                index: 49
            },
            {
                parent: [0,4],
                vertex: [2,5],
                index: 42
            },
            {
                parent: [0,4],
                vertex: [2,3],
                index: 26
            },
            {
                parent: [0,4],
                vertex: [1,2],
                index: 17
            },
        ]
    },
    {
        index: 33,
        vertex: [1,4],
        neighbors: [
            {
                parent: [1,4],
                vertex: [2,6],
                index: 50
            },
            {
                parent: [1,4],
                vertex: [3,5],
                index: 43
            },
            {
                parent: [1,4],
                vertex: [3,3],
                index: 27
            },
            {
                parent: [1,4],
                vertex: [2,2],
                index: 18
            },
            {
                parent: [1,4],
                vertex: [0,2],
                index: 16
            },
            {
                parent: [1,4],
                vertex: [0,6],
                index: 48
            },
        ]
    },
    {
        index: 34,
        vertex: [2,4],
        neighbors: [
            {
                parent: [2,4],
                vertex: [3,6],
                index: 51
            },
            {
                parent: [2,4],
                vertex: [4,5],
                index: 44
            },
            {
                parent: [2,4],
                vertex: [4,3],
                index: 28
            },
            {
                parent: [2,4],
                vertex: [3,2],
                index: 19
            },
            {
                parent: [2,4],
                vertex: [1,2],
                index: 17
            },
            {
                parent: [2,4],
                vertex: [0,3],
                index: 24
            },
            {
                parent: [2,4],
                vertex: [0,5],
                index: 40
            },
            {
                parent: [2,4],
                vertex: [1,6],
                index: 49
            }
        ]
    },
    {
        index: 35,
        vertex: [3,4],
        neighbors: [
            {
                parent: [3,4],
                vertex: [4,6],
                index: 52
            },
            {
                parent: [3,4],
                vertex: [5,5],
                index: 45
            },
            {
                parent: [3,4],
                vertex: [5,3],
                index: 29
            },
            {
                parent: [3,4],
                vertex: [4,2],
                index: 20
            },
            {
                parent: [3,4],
                vertex: [2,2],
                index: 18
            },
            {
                parent: [3,4],
                vertex: [1,3],
                index: 25
            },
            {
                parent: [3,4],
                vertex: [1,5],
                index: 41
            },
            {
                parent: [3,4],
                vertex: [2,6],
                index: 50
            }
        ]
    },
    {
        index: 36,
        vertex: [4,4],
        neighbors: [
            {
                parent: [4,4],
                vertex: [5,6],
                index: 53
            },
            {
                parent: [4,4],
                vertex: [6,5],
                index: 46
            },
            {
                parent: [4,4],
                vertex: [6,3],
                index: 30
            },
            {
                parent: [4,4],
                vertex: [5,2],
                index: 21
            },
            {
                parent: [4,4],
                vertex: [3,2],
                index: 19
            },
            {
                parent: [4,4],
                vertex: [2,3],
                index: 26
            },
            {
                parent: [4,4],
                vertex: [2,5],
                index: 42
            },
            {
                parent: [4,4],
                vertex: [3,6],
                index: 51
            }
        ]
    },
    {
        index: 37,
        vertex: [5,4],
        neighbors: [
            {
                parent: [5,4],
                vertex: [6,6],
                index: 54
            },
            {
                parent: [5,4],
                vertex: [7,5],
                index: 47
            },
            {
                parent: [5,4],
                vertex: [7,3],
                index: 31
            },
            {
                parent: [5,4],
                vertex: [6,2],
                index: 22
            },
            {
                parent: [5,4],
                vertex: [4,2],
                index: 20
            },
            {
                parent: [5,4],
                vertex: [3,3],
                index: 27
            },
            {
                parent: [5,4],
                vertex: [3,5],
                index: 43
            },
            {
                parent: [5,4],
                vertex: [4,6],
                index: 52
            }
        ]
    },
    {
        index: 38,
        vertex: [6,4],
        neighbors: [
            {
                parent: [6,4],
                vertex: [7,6],
                index: 55
            },
            {
                parent: [6,4],
                vertex: [7,2],
                index: 23
            },
            {
                parent: [6,4],
                vertex: [5,2],
                index: 21
            },
            {
                parent: [6,4],
                vertex: [4,3],
                index: 28
            },
            {
                parent: [6,4],
                vertex: [4,5],
                index: 44
            },
            {
                parent: [6,4],
                vertex: [5,6],
                index: 53
            },
        ]
    },
    {
        index: 39,
        vertex: [7,4],
        neighbors: [
            {
                parent: [7,4],
                vertex: [6,2],
                index: 22
            },
            {
                parent: [7,4],
                vertex: [5,3],
                index: 29
            },
            {
                parent: [7,4],
                vertex: [5,5],
                index: 45
            },
            {
                parent: [7,4],
                vertex: [6,6],
                index: 54
            },
        ]
    },
    {
        index: 40,
        vertex: [0,5],
        neighbors: [
            {
                parent: [0,5],
                vertex: [1,7],
                index: 57
            },
            {
                parent: [0,5],
                vertex: [2,6],
                index: 50
            },
            {
                parent: [0,5],
                vertex: [2,4],
                index: 34
            },
            {
                parent: [0,5],
                vertex: [1,3],
                index: 25
            },
        ]
    },
    {
        index: 41,
        vertex: [1,5],
        neighbors: [
            {
                parent: [1,5],
                vertex: [2,7],
                index: 58
            },
            {
                parent: [1,5],
                vertex: [3,6],
                index: 51
            },
            {
                parent: [1,5],
                vertex: [3,4],
                index: 35
            },
            {
                parent: [1,5],
                vertex: [2,3],
                index: 26
            },
            {
                parent: [1,5],
                vertex: [0,3],
                index: 24
            },
            {
                parent: [1,5],
                vertex: [0,7],
                index: 56
            },
        ]
    },
    {
        index: 42,
        vertex: [2,5],
        neighbors: [
            {
                parent: [2,5],
                vertex: [3,7],
                index: 59
            },
            {
                parent: [2,5],
                vertex: [4,6],
                index: 52
            },
            {
                parent: [2,5],
                vertex: [4,4],
                index: 36
            },
            {
                parent: [2,5],
                vertex: [3,3],
                index: 27
            },
            {
                parent: [2,5],
                vertex: [1,3],
                index: 25
            },
            {
                parent: [2,5],
                vertex: [0,4],
                index: 32
            },
            {
                parent: [2,5],
                vertex: [0,6],
                index: 48
            },
            {
                parent: [2,5],
                vertex: [1,7],
                index: 57
            }
        ]
    },
    {
        index: 43,
        vertex: [3,5],
        neighbors: [
            {
                parent: [3,5],
                vertex: [4,7],
                index: 60
            },
            {
                parent: [3,5],
                vertex: [5,6],
                index: 53
            },
            {
                parent: [3,5],
                vertex: [5,4],
                index: 37
            },
            {
                parent: [3,5],
                vertex: [4,3],
                index: 28
            },
            {
                parent: [3,5],
                vertex: [2,3],
                index: 26
            },
            {
                parent: [3,5],
                vertex: [1,4],
                index: 33
            },
            {
                parent: [3,5],
                vertex: [1,6],
                index: 49
            },
            {
                parent: [3,5],
                vertex: [2,7],
                index: 58
            }
        ]
    },
    {
        index: 44,
        vertex: [4,5],
        neighbors: [
            {
                parent: [4,5],
                vertex: [5,7],
                index: 61
            },
            {
                parent: [4,5],
                vertex: [6,6],
                index: 54
            },
            {
                parent: [4,5],
                vertex: [6,4],
                index: 38
            },
            {
                parent: [4,5],
                vertex: [5,3],
                index: 29
            },
            {
                parent: [4,5],
                vertex: [3,3],
                index: 27
            },
            {
                parent: [4,5],
                vertex: [2,4],
                index: 34
            },
            {
                parent: [4,5],
                vertex: [2,6],
                index: 50
            },
            {
                parent: [4,5],
                vertex: [3,7],
                index: 59
            }
        ]
    },
    {
        index: 45,
        vertex: [5,5],
        neighbors: [
            {
                parent: [5,5],
                vertex: [6,7],
                index: 62
            },
            {
                parent: [5,5],
                vertex: [7,6],
                index: 55
            },
            {
                parent: [5,5],
                vertex: [7,4],
                index: 39
            },
            {
                parent: [5,5],
                vertex: [6,3],
                index: 30
            },
            {
                parent: [5,5],
                vertex: [4,3],
                index: 28
            },
            {
                parent: [5,5],
                vertex: [3,4],
                index: 35
            },
            {
                parent: [5,5],
                vertex: [3,6],
                index: 51
            },
            {
                parent: [5,5],
                vertex: [4,7],
                index: 60
            }
        ]
    },
    {
        index: 46,
        vertex: [6,5],
        neighbors: [
            {
                parent: [6,5],
                vertex: [7,7],
                index: 63
            },
            {
                parent: [6,5],
                vertex: [7,3],
                index: 31
            },
            {
                parent: [6,5],
                vertex: [5,3],
                index: 29
            },
            {
                parent: [6,5],
                vertex: [4,4],
                index: 36
            },
            {
                parent: [6,5],
                vertex: [4,6],
                index: 52
            },
            {
                parent: [6,5],
                vertex: [5,7],
                index: 61
            },
        ]
    },
    {
        index: 47,
        vertex: [7,5],
        neighbors: [
            {
                parent: [7,5],
                vertex: [6,7],
                index: 62
            },
            {
                parent: [7,5],
                vertex: [5,6],
                index: 53
            },
            {
                parent: [7,5],
                vertex: [5,4],
                index: 37
            },
            {
                parent: [7,5],
                vertex: [6,3],
                index: 30
            },
        ]
    },
    {
        index: 48,
        vertex: [0,6],
        neighbors: [
            {
                parent: [0,6],
                vertex: [2,7],
                index: 58
            },
            {
                parent: [0,6],
                vertex: [2,5],
                index: 42
            },
            {
                parent: [0,6],
                vertex: [1,4],
                index: 33
            }
        ]
    },
    {
        index: 49,
        vertex: [1,6],
        neighbors: [
            {
                parent: [1,6],
                vertex: [3,7],
                index: 59
            },
            {
                parent: [1,6],
                vertex: [3,5],
                index: 43
            },
            {
                parent: [1,6],
                vertex: [2,4],
                index: 34
            },
            {
                parent: [1,6],
                vertex: [0,4],
                index: 32
            },
        ]
    },
    {
        index: 50,
        vertex: [2,6],
        neighbors: [
            {
                parent: [2,6],
                vertex: [4,7],
                index: 60
            },
            {
                parent: [2,6],
                vertex: [4,5],
                index: 44
            },
            {
                parent: [2,6],
                vertex: [3,4],
                index: 35
            },
            {
                parent: [2,6],
                vertex: [1,4],
                index: 33
            },
            {
                parent: [2,6],
                vertex: [0,5],
                index: 40
            },
            {
                parent: [2,6],
                vertex: [0,7],
                index: 56
            },
        ]
    },
    {
        index: 51,
        vertex: [3,6],
        neighbors: [
            {
                parent: [3,6],
                vertex: [5,7],
                index: 61
            },
            {
                parent: [3,6],
                vertex: [5,5],
                index: 45
            },
            {
                parent: [3,6],
                vertex: [4,4],
                index: 36
            },
            {
                parent: [3,6],
                vertex: [2,4],
                index: 34
            },
            {
                parent: [3,6],
                vertex: [1,5],
                index: 41
            },
            {
                parent: [3,6],
                vertex: [1,7],
                index: 57
            },
        ]
    },
    {
        index: 52,
        vertex: [4,6],
        neighbors: [
            {
                parent: [4,6],
                vertex: [6,7],
                index: 62
            },
            {
                parent: [4,6],
                vertex: [6,5],
                index: 46
            },
            {
                parent: [4,6],
                vertex: [5,4],
                index: 37
            },
            {
                parent: [4,6],
                vertex: [3,4],
                index: 35
            },
            {
                parent: [4,6],
                vertex: [2,5],
                index: 42
            },
            {
                parent: [4,6],
                vertex: [2,7],
                index: 58
            },
        ]
    },
    {
        index: 53,
        vertex: [5,6],
        neighbors: [
            {
                parent: [5,6],
                vertex: [7,7],
                index: 63
            },
            {
                parent: [5,6],
                vertex: [7,5],
                index: 47
            },
            {
                parent: [5,6],
                vertex: [6,4],
                index: 38
            },
            {
                parent: [5,6],
                vertex: [4,4],
                index: 36
            },
            {
                parent: [5,6],
                vertex: [3,5],
                index: 43
            },
            {
                parent: [5,6],
                vertex: [3,7],
                index: 59
            },
        ]
    },
    {
        index: 54,
        vertex: [6,6],
        neighbors: [
            {
                parent: [6,6],
                vertex: [7,4],
                index: 39
            },
            {
                parent: [6,6],
                vertex: [5,4],
                index: 37
            },
            {
                parent: [6,6],
                vertex: [4,5],
                index: 44
            },
            {
                parent: [6,6],
                vertex: [4,7],
                index: 60
            },
        ]
    },
    {
        index: 55,
        vertex: [7,6],
        neighbors: [
            {
                parent: [7,6],
                vertex: [6,4],
                index: 38
            },
            {
                parent: [7,6],
                vertex: [5,5],
                index: 45
            },
            {
                parent: [7,6],
                vertex: [5,7],
                index: 61
            }
        ]
    },
    {
        index: 56,
        vertex: [0,7],
        neighbors: [
            {
                parent: [0,7],
                vertex: [1,5],
                index: 41
            },
            {
                parent: [0,7],
                vertex: [2,6],
                index: 50
            }
        ]
    },
    {
        index: 57,
        vertex: [1,7],
        neighbors: [
            {
                parent: [1,7],
                vertex: [0,5],
                index: 40
            },
            {
                parent: [1,7],
                vertex: [2,5],
                index: 42
            },
            {
                parent: [1,7],
                vertex: [3,6],
                index: 51
            }
        ]
    },
    {
        index: 58,
        vertex: [2,7],
        neighbors: [
            {
                parent: [2,7],
                vertex: [0,6],
                index: 48
            },
            {
                parent: [2,7],
                vertex: [1,5],
                index: 41
            },
            {
                parent: [2,7],
                vertex: [3,5],
                index: 43
            },
            {
                parent: [2,7],
                vertex: [4,6],
                index: 52
            },
        ]
    },
    {
        index: 59,
        vertex: [3,7],
        neighbors: [
            {
                parent: [3,7],
                vertex: [1,6],
                index: 49
            },
            {
                parent: [3,7],
                vertex: [2,5],
                index: 42
            },
            {
                parent: [3,7],
                vertex: [4,5],
                index: 44
            },
            {
                parent: [3,7],
                vertex: [5,6],
                index: 53
            },
        ]
    },
    {
        index: 60,
        vertex: [4,7],
        neighbors: [
            {
                parent: [4,7],
                vertex: [2,6],
                index: 50
            },
            {
                parent: [4,7],
                vertex: [3,5],
                index: 43
            },
            {
                parent: [4,7],
                vertex: [5,5],
                index: 45
            },
            {
                parent: [4,7],
                vertex: [6,6],
                index: 54
            },
        ]
    },
    {
        index: 61,
        vertex: [5,7],
        neighbors: [
            {
                parent: [5,7],
                vertex: [3,6],
                index: 51
            },
            {
                parent: [5,7],
                vertex: [4,5],
                index: 44
            },
            {
                parent: [5,7],
                vertex: [6,5],
                index: 46
            },
            {
                parent: [5,7],
                vertex: [7,6],
                index: 55
            },
        ]
    },
    {
        index: 62,
        vertex: [6,7],
        neighbors: [
            {
                parent: [6,7],
                vertex: [4,6],
                index: 52
            },
            {
                parent: [6,7],
                vertex: [5,5],
                index: 45
            },
            {
                parent: [6,7],
                vertex: [7,5],
                index: 47
            }
        ]
    },
    {
        index: 63,
        vertex: [7,7],
        neighbors: [
            {
                parent: [7,7],
                vertex: [5,6],
                index: 53
            },
            {
                parent: [7,7],
                vertex: [6,5],
                index: 46
            }
        ]
    },
];

let tiles = document.querySelectorAll(".tile");
tiles.forEach(tile => tile.addEventListener("click", (e) => {
    if (e.target) {
        if (!startStatus) {
            startingCoordinates = e.target.id.split("_");
            startingCoordinates = startingCoordinates[1].split("-")
            startingCoordinates[0] = Number(startingCoordinates[0])
            startingCoordinates[1] = Number(startingCoordinates[1])
            startStatus = true;
            startTileElement = e.target;
            startTileElement.appendChild(manualKnight);
            let gameMessage = document.querySelector(".gameMessage");
            gameMessage.innerText = "Now select a target tile!"    

        } else {
            let checkTiles = document.querySelectorAll(".tile");
            for (let i = 0; i < checkTiles.length; i++) {
                if (checkTiles[i].hasChildNodes() && !checkTiles[i].firstChild.classList.contains("mknight")) {
                    let removedCircle = checkTiles[i].firstChild;
                    checkTiles[i].removeChild(removedCircle);    
                }
            }

            targetCoordinates = e.target.id.split("_");
            targetCoordinates = targetCoordinates[1].split("-");
            targetCoordinates[0] = Number(targetCoordinates[0])
            targetCoordinates[1] = Number(targetCoordinates[1])
            targetStatus = true;
            let knightInformation = knightMoves(adjList, visitedArray, startingCoordinates, targetCoordinates);
            console.log(knightInformation);
            if (typeof a !== "string") {
                // set red circles at each tile coordinate

                let gameMessage = document.querySelector(".gameMessage");
                gameMessage.innerText = `You made the jump in ${knightInformation.numberOfSteps} steps. This was
                your path: `
                for (let i = knightInformation.goldenPath.length-1; i >= 0; i--) {
                    gameMessage.innerText += `
                    -> [${knightInformation.goldenPath[i]}]`;
                }
    
                let stepCounter = 1;
                for (let i = knightInformation.goldenPath.length-1; i >= 1; i--) {
                    
                    if (i == knightInformation.goldenPath.length-1) {
                        let startCircle = document.createElement("div");
                        startCircle.classList.add("start");
                        let startText = document.createElement("p");
                        startText.innerText = "Start";
                        startCircle.appendChild(startText);
                        let rawCoordinateInfo = knightInformation.goldenPath[knightInformation.goldenPath.length-1];
                        let coordinateString = `#a_${rawCoordinateInfo[0]}-${rawCoordinateInfo[1]}`;
                        let startCircleElement = document.querySelector(coordinateString);
                        startCircleElement.appendChild(startCircle);    

                    } else {
                        let pathCircle = document.createElement("div");
                        pathCircle.classList.add("circle");
                        let stepText = document.createElement("p");
                        stepText.classList.add("step");
                        stepText.innerText = `${stepCounter}`;
                        pathCircle.appendChild(stepText);
                        stepCounter+= 1;
                        let rawCoordinateInfo = knightInformation.goldenPath[i];
                        let coordinateString = `#a_${rawCoordinateInfo[0]}-${rawCoordinateInfo[1]}`;
                        let intermediateCircle = document.querySelector(coordinateString);
                        intermediateCircle.appendChild(pathCircle);    
                    }
                }

                startTileElement.removeChild(manualKnight);
                targetTileElement = e.target;
                targetTileElement.appendChild(manualKnight);
                startingCoordinates = targetCoordinates;
                targetCoordinates = "";
                targetStatus = false;
                for (let i = 0; i < 64; i++) {
                    visitedArray[i] = false;
                };
                startTileElement = targetTileElement;    
            } else {
                let gameMessage = document.querySelector(".gameMessage");
                gameMessage.innerText = `${knightInformation}`;        
                targetCoordinates = "";
                targetStatus = false;
            }
        }
    }
}));

const clearFunc = () => {
    let checkTiles = document.querySelectorAll(".tile");
    for (let i = 0; i < checkTiles.length; i++) {
        if (checkTiles[i].hasChildNodes()) {
            let removedCircle = checkTiles[i].firstChild;
            checkTiles[i].removeChild(removedCircle);    
        }
    }
    startingCoordinates = "";
    startStatus = false;
    targetCoordinates = "";
    targetStatus = false;
}

let clear = document.querySelector(".clear");
clear.addEventListener("click", (e) => {
    if (e.target) {
        clearFunc();
        let gameMessage = document.querySelector(".gameMessage");
        gameMessage.innerText = "Please select a starting tile!"
    }
});

let rpButton = document.querySelector(".randomKnight");
rpButton.addEventListener("click", (e) => {
    clearFunc();
    startingCoordinates = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
    startStatus = true;
    startTileElement = document.querySelector(`#a_${startingCoordinates[0]}-${startingCoordinates[1]}`);
    startTileElement.appendChild(manualKnight);
    let gameMessage = document.querySelector(".gameMessage");
    gameMessage.innerText = "Now select a target tile!"
});

let rtButton = document.querySelector(".randomTarget");
rtButton.addEventListener("click", (e) => {    
    if (startingCoordinates === "" && startStatus === false) {
        let gameMessage = document.querySelector(".gameMessage");
        gameMessage.innerText = "You must first select a starting tile!"
    } else {

        let checkTiles = document.querySelectorAll(".tile");
        for (let i = 0; i < checkTiles.length; i++) {
            if (checkTiles[i].hasChildNodes() && !checkTiles[i].firstChild.classList.contains("mknight")) {
                let removedCircle = checkTiles[i].firstChild;
                checkTiles[i].removeChild(removedCircle);    
            }
        }

        targetCoordinates = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
        targetStatus = true;
        console.log(targetCoordinates);
        let knightInformation = knightMoves(adjList, visitedArray, startingCoordinates, targetCoordinates);
        if (typeof a !== "string") {
            // set red circles at each tile coordinate
            let gameMessage = document.querySelector(".gameMessage");
            gameMessage.innerText = `You made the jump in ${knightInformation.numberOfSteps} steps. This was
            your path: `
            for (let i = knightInformation.goldenPath.length-1; i >= 0; i--) {
                gameMessage.innerText += `
                -> [${knightInformation.goldenPath[i]}]`;
            }

            let stepCounter = 1;
            for (let i = knightInformation.goldenPath.length-1; i >= 1; i--) {
                
                if (i == knightInformation.goldenPath.length-1) {
                    let startCircle = document.createElement("div");
                    startCircle.classList.add("start");
                    let startText = document.createElement("p");
                    startText.innerText = "Start";
                    startCircle.appendChild(startText);
                    let rawCoordinateInfo = knightInformation.goldenPath[knightInformation.goldenPath.length-1];
                    let coordinateString = `#a_${rawCoordinateInfo[0]}-${rawCoordinateInfo[1]}`;
                    let startCircleElement = document.querySelector(coordinateString);
                    startCircleElement.appendChild(startCircle);    

                } else {
                    let pathCircle = document.createElement("div");
                    pathCircle.classList.add("circle");
                    let stepText = document.createElement("p");
                    stepText.classList.add("step");
                    stepText.innerText = `${stepCounter}`;
                    pathCircle.appendChild(stepText);
                    stepCounter+= 1;
                    let rawCoordinateInfo = knightInformation.goldenPath[i];
                    let coordinateString = `#a_${rawCoordinateInfo[0]}-${rawCoordinateInfo[1]}`;
                    let intermediateCircle = document.querySelector(coordinateString);
                    intermediateCircle.appendChild(pathCircle);    
                }
            }

            startTileElement.removeChild(manualKnight);
            targetTileElement = document.querySelector(`#a_${targetCoordinates[0]}-${targetCoordinates[1]}`);
            targetTileElement.appendChild(manualKnight);
            startingCoordinates = targetCoordinates;
            targetCoordinates = "";
            targetStatus = false;
            for (let i = 0; i < 64; i++) {
                visitedArray[i] = false;
            };
            startTileElement = targetTileElement;    
        }
    }
});