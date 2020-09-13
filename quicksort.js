function quicksort(arr) {
    if (arr.length < 2)
        return arr;

    // От выбора этого числа зависит скорость алгоритма
    let pivot = arr[randomInt(0, arr.length - 1)];
    let lesser = arr.slice(1).filter((el) => {return el <= pivot});
    let greater = arr.slice(1).filter((el) => {return el > pivot});

    return quicksort(lesser).concat([pivot]).concat(quicksort(greater));
}