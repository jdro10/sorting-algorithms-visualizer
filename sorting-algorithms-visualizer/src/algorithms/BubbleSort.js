import { Colors } from "../helpers/Colors";

const colorSteps = [];
const sortingSteps = [];

export function bubbleSort(array) {
  sortingSteps.push(array.slice());
  colorSteps.push(Array(array.length).fill(Colors.WHITE));

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      algorithmSteps(array.slice(), i, j, Colors.RED);
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        algorithmSteps(array.slice(), i, j, Colors.BLUE);
      }
    }
  }

  sortingSteps.push(array.slice());
  colorSteps.push(Array(array.length).fill(Colors.GREEN));

  return [sortingSteps, colorSteps];
}

function algorithmSteps(array, iteration, currentIndex, color) {
  const currentArray = Array(array.length - iteration).fill(Colors.WHITE);

  currentArray[currentIndex] = color;
  currentArray[currentIndex + 1] = color;

  const sortedPositions = Array(array.length - (array.length - iteration)).fill(
    Colors.GREEN
  );

  colorSteps.push(currentArray.concat(sortedPositions));
  sortingSteps.push(array.slice());
}
