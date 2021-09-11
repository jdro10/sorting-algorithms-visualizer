import { Colors } from "../helpers/Helper";

const colorSteps = [];
const sortingSteps = [];

export function bubbleSort(array) {
  sortingSteps.push(array.slice());
  colorSteps.push(Array(array.length).fill(Colors.WHITE));

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      algorithmSteps(array.slice(), array.length, i, j, Colors.RED);
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        algorithmSteps(array.slice(), array.length, i, j, Colors.BLUE);
      }
    }
  }

  sortingSteps.push(array.slice());
  colorSteps.push(Array(array.length).fill(Colors.GREEN));

  return [sortingSteps, colorSteps];
}

function algorithmSteps(array, arrayLength, iteration, currentIndex, color) {
  const currentArray = Array(arrayLength - iteration).fill(Colors.WHITE);

  currentArray[currentIndex] = color;
  currentArray[currentIndex + 1] = color;

  const sortedPositions = Array(arrayLength - (array.length - iteration)).fill(
    Colors.GREEN
  );

  colorSteps.push(currentArray.concat(sortedPositions));
  sortingSteps.push(array.slice());
}
