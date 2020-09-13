// Изменяет исходный массив
function selectionSort(array) {

    let resultArray = [];
    let smallest = null;

    const len = array.length;

    for (let i = 0; i < len; i++) {

        smallest = findSmallest(array);
        resultArray.push(array[smallest]);
        array.splice(smallest, 1);

    }

    return resultArray;

}