import { Colors } from "../helpers/Colors";

const colorSteps = [];
const sortingSteps = [];

export function selectionSort(array) {
  sortingSteps.push(array.slice());
  colorSteps.push(Array(array.length).fill(Colors.WHITE));

  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      comparisonSteps(array.slice(), min, j, Colors.RED);

      if (array[j] < array[min]) {
        min = j;
        comparisonSteps(array.slice(), min, j, Colors.RED);
      }
    }

    let tmp = array[i];
    array[i] = array[min];
    array[min] = tmp;

    comparisonSteps(array.slice(), i, min, Colors.BLUE);
  }

  sortingSteps.push(array.slice());
  colorSteps.push(Array(array.length).fill(Colors.GREEN));

  return ["Selection Sort", sortingSteps, colorSteps];
}

function comparisonSteps(array, cmpIndex1, cmpIndex2, color) {
  const array1 = Array(array.length).fill(Colors.WHITE);

  array1[cmpIndex1] = color;
  array1[cmpIndex2] = color;

  colorSteps.push(array1);
  sortingSteps.push(array.slice());
}
