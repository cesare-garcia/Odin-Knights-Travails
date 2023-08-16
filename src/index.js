// import './style.css';
// import boardCreation from "./boardCreation";

// const content = document.querySelector("#content");
// const boardContainer = document.createElement("div");
// boardContainer.classList.add("boardContainer");
// content.appendChild(boardContainer);
// let gameBoard = boardCreation();
// boardContainer.appendChild(gameBoard);

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
        neighbors: [[7,4],[7,0],[5,0],[4,1],[4,3],[5,4]]
    },
    {
        index: 23,
        vertex: [7,2],
        neighbors: [[6,0],[5,1],[5,3],[6,4]]
    },
    {
        index: 24,
        vertex: [0,3],
        neighbors: [[1,5],[2,4],[2,2],[1,1]]
    },
    {
        index: 25,
        vertex: [1,3],
        neighbors: [[2,5],[3,4],[3,2],[2,1],[0,1],[0,5]]
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
        neighbors: [[7,5],[7,1],[5,1],[4,2],[4,4],[5,5]]
    },
    {
        index: 31,
        vertex: [7,3],
        neighbors: [[6,1],[5,2],[5,4],[6,5]]
    },
    {
        index: 32,
        vertex: [0,4],
        neighbors: [[1,6],[2,5],[2,3],[1,2]]
    },
    {
        index: 33,
        vertex: [1,4],
        neighbors: [[2,6],[3,5],[3,3],[2,2],[0,2],[0,6]]
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
        neighbors: [[7,6],[7,2],[5,2],[4,3],[4,5],[5,6]]
    },
    {
        index: 39,
        vertex: [7,4],
        neighbors: [[6,2],[5,3],[5,5],[6,6]]
    },
    {
        index: 40,
        vertex: [0,5],
        neighbors: [[1,7],[2,6],[2,4],[1,3]]
    },
    {
        index: 41,
        vertex: [1,5],
        neighbors: [[2,7],[3,6],[3,4],[2,3],[0,3],[0,7]]
    },
    {
        index: 42,
        vertex: [2,5],
        neighbors: [
            {
                parent: [2,5],
                vertex: [3,7],
                index: 55
            },
            {
                parent: [2,5],
                vertex: [4,6],
                index: 48
            },
            {
                parent: [2,5],
                vertex: [4,4],
                index: 32
            },
            {
                parent: [2,5],
                vertex: [3,3],
                index: 23
            },
            {
                parent: [2,5],
                vertex: [1,3],
                index: 21
            },
            {
                parent: [2,5],
                vertex: [0,4],
                index: 28
            },
            {
                parent: [2,5],
                vertex: [0,6],
                index: 44
            },
            {
                parent: [2,5],
                vertex: [1,7],
                index: 53
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
                index: 56
            },
            {
                parent: [3,5],
                vertex: [5,6],
                index: 49
            },
            {
                parent: [3,5],
                vertex: [5,4],
                index: 33
            },
            {
                parent: [3,5],
                vertex: [4,3],
                index: 24
            },
            {
                parent: [3,5],
                vertex: [2,3],
                index: 22
            },
            {
                parent: [3,5],
                vertex: [1,4],
                index: 29
            },
            {
                parent: [3,5],
                vertex: [1,6],
                index: 45
            },
            {
                parent: [3,5],
                vertex: [2,7],
                index: 54
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
                index: 57
            },
            {
                parent: [4,5],
                vertex: [6,6],
                index: 50
            },
            {
                parent: [4,5],
                vertex: [6,4],
                index: 34
            },
            {
                parent: [4,5],
                vertex: [5,3],
                index: 25
            },
            {
                parent: [4,5],
                vertex: [3,3],
                index: 23
            },
            {
                parent: [4,5],
                vertex: [2,4],
                index: 30
            },
            {
                parent: [4,5],
                vertex: [2,6],
                index: 46
            },
            {
                parent: [4,5],
                vertex: [3,7],
                index: 55
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
                index: 58
            },
            {
                parent: [5,5],
                vertex: [7,6],
                index: 51
            },
            {
                parent: [5,5],
                vertex: [7,4],
                index: 35
            },
            {
                parent: [5,5],
                vertex: [6,3],
                index: 26
            },
            {
                parent: [5,5],
                vertex: [4,3],
                index: 24
            },
            {
                parent: [5,5],
                vertex: [3,4],
                index: 31
            },
            {
                parent: [5,5],
                vertex: [3,6],
                index: 47
            },
            {
                parent: [5,5],
                vertex: [4,7],
                index: 56
            }
        ]
    },
    {
        index: 46,
        vertex: [6,5],
        neighbors: [[7,7],[7,3],[5,3],[4,4],[4,6],[5,7]]
    },
    {
        index: 47,
        vertex: [7,5],
        neighbors: [[6,7],[5,6],[5,4],[6,3]]
    },
    {
        index: 48,
        vertex: [0,6],
        neighbors: [[2,7],[2,5],[1,4]]
    },
    {
        index: 49,
        vertex: [1,6],
        neighbors: [[3,7],[3,5],[2,4],[0,4]]
    },
    {
        index: 50,
        vertex: [2,6],
        neighbors: [[4,7],[4,5],[3,4],[1,4],[0,5],[0,7]]
    },
    {
        index: 51,
        vertex: [3,6],
        neighbors: [[5,7],[5,5],[4,4],[2,4],[1,5],[1,7]]
    },
    {
        index: 52,
        vertex: [4,6],
        neighbors: [[6,7],[6,5],[5,4],[3,4],[2,5],[2,7]]
    },
    {
        index: 53,
        vertex: [5,6],
        neighbors: [[7,7],[7,5],[6,4],[4,4],[3,5],[3,7]]
    },
    {
        index: 54,
        vertex: [6,6],
        neighbors: [[7,4],[5,4],[4,5],[4,7]]
    },
    {
        index: 55,
        vertex: [7,6],
        neighbors: [[6,4],[5,5],[5,7]]
    },
    {
        index: 56,
        vertex: [0,7],
        neighbors: [[1,5],[2,6]]
    },
    {
        index: 57,
        vertex: [1,7],
        neighbors: [[0,5],[2,5],[3,6]]
    },
    {
        index: 58,
        vertex: [2,7],
        neighbors: [[0,6],[1,5],[3,5],[4,6]]
    },
    {
        index: 59,
        vertex: [3,7],
        neighbors: [[1,6],[2,5],[4,5],[5,6]]
    },
    {
        index: 60,
        vertex: [4,7],
        neighbors: [[2,6],[3,5],[5,5],[6,6]]
    },
    {
        index: 61,
        vertex: [5,7],
        neighbors: [[3,6],[4,5],[6,5],[7,6]]
    },
    {
        index: 62,
        vertex: [6,7],
        neighbors: [[4,6],[5,5],[7,5]]
    },
    {
        index: 63,
        vertex: [7,7],
        neighbors: [[5,6],[6,5]]
    },
];

console.log(adjList[1].neighbors[0].vertex);