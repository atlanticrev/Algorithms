/*
* Algorithms
* */
function binarySearch(sortedArray, item) {

  let
    // Начальные значения диапозона поиска
    startIndex = 0,
    endIndex = sortedArray.length - 1,
    middleIndex,
    testElement;

  while (startIndex <= endIndex) {

    // Находим индекс элемента посередине
    middleIndex = Math.floor((startIndex + endIndex) / 2);

    // Выбираем этот элемент из массива
    testElement = sortedArray[middleIndex];

    // Если элемент совпадает с искомым, возвращаем его индекс
    if (testElement === item) {

      return middleIndex;

    }

    // Если искомый элемент меньше, корректируем диапозон поиска
    if (testElement > item) {

      endIndex = middleIndex - 1;

    // Если искомый элемент больше, тоже корректируем диапозон
    } else {

      startIndex = middleIndex + 1;

    }

  }

  // Если элемент не нашли, возврат null
  return null;

}

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

/*
* Utils
* */

function findSmallest(array) {

  let smallest = array[0];
  let smallestIndex = 0;

  array.forEach((element, index) => {

    if (element < smallest) {

      smallest = element;
      smallestIndex = index;

    }

  });

  return smallestIndex;

}

/*
* Test data
* */
const data = [];

for (let i = 43; i < 100; i++) {

  data.push(i);

}

/*
* Output
* */
console.log(binarySearch(data, 45));