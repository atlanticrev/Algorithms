function selectionSort(arr) {
    let result = [];
    let minEl = null;

    for (let i = 0; i < arr.length; i++) {
        minEl = min(arr);
        result.push(arr[minEl]);
        // Go to arr without el just taken
        arr.splice(minEl, 1);
    }

    return result;
}