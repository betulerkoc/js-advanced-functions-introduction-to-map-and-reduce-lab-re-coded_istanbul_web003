// Your code here
function mapToNegativize(arr) {
    return arr.map(x => x * -1);
}

function mapToNoChange(arr) {
    return arr;
}

function mapToDouble(arr) {
    return arr.map(x => x * 2);
}


function mapToSquare(arr) {
    return arr.map(x => x ** 2);
}

const reducer = function (accumulator, item) {
    return accumulator + item;
};

function reduceToTotal(arr, start) {
    if(!start) start = 0;
    return arr.reduce(reducer, start);
}

const reducerTF = function (accumulator, item) {
    return accumulator && item;
};

function reduceToAllTrue(arr) {
    return arr.reduce(reducerTF) ? true : false;
}

const reducerAnyTrue = function (accumulator, item) {
    return accumulator || item;
};

function reduceToAnyTrue(arr) {
    return arr.reduce(reducerAnyTrue) ? true : false;
}