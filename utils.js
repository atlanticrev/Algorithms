function count(arr) {
    if (!arr.length)
        return 0;

    return 1 + count(arr.slice(1));
}

function recursiveMax(arr) {
    if (arr.length === 1)
        return arr[0];

    return Math.max(arr[0], recursiveMax(arr.slice(1)));
}

function recursiveSum(arr) {
    if (!arr.length)
        return 0;

    return arr[0] + recursiveSum(arr.slice(1));
}

function min(arr) {
    let min = arr[0];
    let minIndex = 0;

    arr.forEach((element, index) => {
        if (element < min) {
            min = element;
            minIndex = index;
        }
    });

    return minIndex;
}

function random(start, stop) {
    return Math.random() * (stop - start) + start;
}

function randomInt(start, stop) {
    return Math.round(random(start, stop));
}