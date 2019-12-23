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

function recursiveSum(array) {

  if (!array.length)
    return 0;

  return array[0] + recursiveSum(array.slice(1));

}

function recursiveCountElements(array) {

  if (!array.length)
    return 0;

  return 1 + recursiveCountElements(array.slice(1));

}

function recursiveMaxElement(array) {

  if (array.length === 1)
    return array[0];

  return Math.max(array[0], recursiveMaxElement(array.slice(1)));

}

// Работает не верно
function quicksort(array) {

  if (array.length < 2)
    return array;

  // От выбора этого числа зависит скорость алгоритма
  // let pivotIndex = randomInt(0, array.length - 1);
  let pivot = array[0];

  let lesserElements = array.slice(1).filter((element) => {return element <= pivot});

  let greaterElements = array.slice(1).filter((element) => {return element > pivot});

  return quicksort(lesserElements).concat([pivot]).concat(quicksort(greaterElements));
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

function random(start, stop) {

  return Math.random() * (stop - start) + start;

}

function randomInt(start, stop) {

  return Math.round(random(start, stop));

}

/*
* Implementing data structures
* */

class Graph {

  constructor() {

    this._graph = {
      you: ['alice', 'bob', 'claire'],
      bob: ['anuj', 'peggy'],
      alice: ['peggy'],
      claire: ['thom', 'jonny'],
      anuj: [],
      peggy: [],
      thom: [],
      jonny: []
    };

  }

  get graph() {

    return this._graph;

  }

  addNode(nodeName, neighbors) {

    this._graph[nodeName] = neighbors;

  }

}

class Queue {

  constructor(...elements) {

    this._queue = [...elements];

  }

  get queue() {

    return this._queue;

  }

  enqueue(element) {

    return this._queue.push(element);

  }

  dequeue() {

    return this._queue.shift();

  }

}

/*
* Test data
* */
const data = [];

for (let i = 0; i < 5; i++) {

  data.push(randomInt(1, 100));

}

/*
* Output
* */

console.log('Unsorted array:', data);
const sortedArray = quicksort(data);
console.log('Sorted array:', sortedArray);


const graph = new Graph();
let queueOfNodes = new Queue();

console.log('Queue:', queueOfNodes.queue);
console.log('Graph:', graph.graph);

// console.log(binarySearch(sortedArray, 45));
// console.log(recursiveSum(sortedArray));
// console.log(recursiveCountElements(sortedArray));
// console.log(recursiveMaxElement(sortedArray)); // Имитация Math.max(...sortedArray)
