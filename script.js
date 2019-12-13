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

const data = [];

// Заполнение тестового массива значениями
for (let i = 43; i < 100; i++) {

  data.push(i);

}

console.log(binarySearch(data, 45));