const compareArrays = (a, b) => {
    return a.every((val, index) => val === b[index]);
};

export default compareArrays;