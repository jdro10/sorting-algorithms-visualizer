import { Colors } from "../helpers/Colors";

const colorSteps = [];
const sortingSteps = [];

export function quickSortAlgorithm(array) {
  sortingSteps.push(array.slice());
  colorSteps.push(Array(array.length).fill(Colors.WHITE));

  quickSort(array, 0, array.length - 1);

  sortingSteps.push(array.slice());
  colorSteps.push(Array(array.length).fill(Colors.GREEN));

  return ["Quick sort", sortingSteps, colorSteps];
}

function quickSort(array, start, end) {
  if (start < end) {
    var index = partition(array, start, end);
    quickSort(array, start, index - 1);
    quickSort(array, index + 1, end);
  }
}

function partition(array, start, end) {
  var pivot = array[end];
  var i = start - 1;

  for (var j = start; j <= end - 1; j++) {
    if (array[j] < pivot) {
      i++;
      algorithmSteps(array.slice(), i, j, pivot, Colors.RED);
      swap(array, i, j);
      algorithmSteps(array.slice(), i, j, pivot, Colors.BLUE);
    }
  }

  let partitionIndex = i + 1;

  algorithmSteps(array.slice(), partitionIndex, end, pivot, Colors.RED);
  swap(array, partitionIndex, end);
  algorithmSteps(array.slice(), partitionIndex, end, pivot, Colors.BLUE);

  return partitionIndex;
}

function swap(array, i, j) {
  let tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function algorithmSteps(array, index1, index2, pivot, color) {
  const array1 = Array(array.length).fill(Colors.WHITE);

  array1[index1] = color;
  array1[index2] = color;
  array1[array.indexOf(pivot)] = Colors.GREY;

  colorSteps.push(array1);
  sortingSteps.push(array.slice());
}
