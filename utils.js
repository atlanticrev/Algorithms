function count(array) {
    if (!array.length)
        return 0;

    return 1 + count(array.slice(1));
}

function recursiveMax(array) {
    if (array.length === 1)
        return array[0];

    return Math.max(array[0], recursiveMax(array.slice(1)));
}

function min(array) {
    let min = array[0];
    let minIndex = 0;

    array.forEach((element, index) => {
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