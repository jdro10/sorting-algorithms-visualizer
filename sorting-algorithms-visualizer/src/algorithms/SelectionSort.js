import { Colors } from "../helpers/Colors";

const colorSteps = [];
const sortingSteps = [];

export function selectionSort(array) {
  sortingSteps.push(array.slice());
  colorSteps.push(Array(array.length).fill(Colors.WHITE));

  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      comparisonSteps(array.slice(), i, min, j, Colors.RED);

      if (array[j] < array[min]) {
        min = j;
        comparisonSteps(array.slice(), i, min, j, Colors.RED);
      }
    }

    let tmp = array[i];
    array[i] = array[min];
    array[min] = tmp;

    comparisonSteps(array.slice(), i, i, min, Colors.BLUE);
  }

  sortingSteps.push(array.slice());
  colorSteps.push(Array(array.length).fill(Colors.GREEN));

  return [sortingSteps, colorSteps];
}

function comparisonSteps(array, iteration, cmpIndex1, cmpIndex2, color) {
  const currentArray = Array(array.length - iteration).fill(Colors.WHITE);

  currentArray[cmpIndex1 - iteration] = color;
  currentArray[cmpIndex2 - iteration] = color;

  const sortedPositions = Array(array.length - (array.length - iteration)).fill(
    Colors.GREEN
  );

  colorSteps.push(sortedPositions.concat(currentArray));
  sortingSteps.push(array.slice());
}
