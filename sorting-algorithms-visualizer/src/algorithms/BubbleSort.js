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

  return ["Bubble Sort", sortingSteps, colorSteps];
}

function algorithmSteps(array, iteration, currentIndex, color) {
  const array1 = Array(array.length).fill(Colors.WHITE);

  array1[currentIndex] = color;
  array1[currentIndex + 1] = color;

  colorSteps.push(array1);
  sortingSteps.push(array.slice());
}
