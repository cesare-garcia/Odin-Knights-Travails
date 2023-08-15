function binarySearchRec(array, value) {

    let m = (array.length)/2;

    if (array[m] === value) {
        return console.log(`the index of ${value} is ${m}`);
    } else if (array[m] < value) {
        let rightHalf = array.slice(m+1,(array.length-1));
        binarySearchRec(rightHalf,value);
    } else {
        let leftHalf = array.slice(0,m+1);
        binarySearchRec(leftHalf,value);
    };
}

function binarySearchIt(array, value) {
    let m = (array.length)/2;

    if (array[m] === value) {
        return console.log(`${m} is the index of value`);
    } 
}


// function selectionSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i+1; j < array.length; j++) {
//             let test = array[i];
//             if (array[j] < test) {
//                 array[i] = array[j];
//                 array[j] = test;
//             }
//         }
//     }
//     return console.log(array);
// }

let testArray = [403,3,25,4,26,1];
// selectionSort(testArray);