import { Colors } from "../helpers/Colors";

const colorSteps = [];
const sortingSteps = [];

export function mergeSortAlgorithm(array) {
  sortingSteps.push(array.slice());
  colorSteps.push(Array(array.length).fill(Colors.WHITE));

  mergeSort(array, 0, array.length - 1);

  sortingSteps.push(array.slice());
  colorSteps.push(Array(array.length).fill(Colors.GREEN));

  return ["Merge sort", sortingSteps, colorSteps];
}

function mergeSort(array, startIndex, endIndex) {
  if (startIndex < endIndex) {
    var middle = startIndex + parseInt((endIndex - startIndex) / 2);
    mergeSort(array, startIndex, middle);
    mergeSort(array, middle + 1, endIndex);
    merge(array, startIndex, middle, endIndex);
  }
}

function merge(array, start, middle, end) {
  var middleIndex = middle - start + 1;
  var endIndex = end - middle;

  var leftArray = new Array(middleIndex);
  var rightArray = new Array(endIndex);

  var startLeft = array.indexOf(array[start]);
  var endLeft = array.indexOf(array[start + middleIndex]);

  var startRight = array.indexOf(array[middle + 1]);
  var endRight = array.indexOf(array[middle + endIndex]);

  for (let i = 0; i < middleIndex; i++) {
    leftArray[i] = array[start + i];
  }

  for (let j = 0; j < endIndex; j++) {
    rightArray[j] = array[middle + 1 + j];
  }

  var i = 0;
  var j = 0;
  var k = start;

  while (i < middleIndex && j < endIndex) {
    if (leftArray[i] <= rightArray[j]) {
      algorithmSteps(
        array.slice(),
        k,
        startLeft,
        endLeft,
        startRight,
        endRight
      );
      array[k] = leftArray[i];
      i++;
    } else {
      algorithmSteps(
        array.slice(),
        k,
        startLeft,
        endLeft,
        startRight,
        endRight
      );
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < middleIndex) {
    array[k] = leftArray[i];
    algorithmSteps(array.slice(), k, startLeft, endLeft, startRight, endRight);
    i++;
    k++;
  }

  while (j < endIndex) {
    array[k] = rightArray[j];
    algorithmSteps(array.slice(), k, startLeft, endLeft, startRight, endRight);
    j++;
    k++;
  }
}

function algorithmSteps(array, k, startLeft, endLeft, startRight, endRight) {
  const array1 = Array(array.length).fill(Colors.WHITE);

  for (let i = startLeft; i < endLeft; i++) {
    array1[i] = Colors.ORANGE;
  }

  for (let i = startRight; i < endRight + 1; i++) {
    array1[i] = Colors.DARK_ORANGE;
  }

  array1[k] = Colors.RED;

  colorSteps.push(array1);
  sortingSteps.push(array.slice());
}
