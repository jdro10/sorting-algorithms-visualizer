import { Colors } from "../helpers/Colors";

const colorSteps = [];
const sortingSteps = [];

export function insertionSort(array) {
  sortingSteps.push(array.slice());
  colorSteps.push(Array(array.length).fill(Colors.WHITE));

  for (let i = 1; i < array.length; i++) {
    let firstUnsorted = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > firstUnsorted) {
      algorithmSteps(array.slice(), i, j, Colors.RED);

      array[j + 1] = array[j];
      array[j] = firstUnsorted;

      algorithmSteps(array.slice(), i, j, Colors.BLUE);
      j--;
    }
  }

  sortingSteps.push(array.slice());
  colorSteps.push(Array(array.length).fill(Colors.GREEN));

  return ["Insertion sort", sortingSteps, colorSteps];
}

function algorithmSteps(array, iteration, currentIndex, color) {
  const array1 = Array(array.length).fill(Colors.WHITE);

  array1[iteration] = Colors.GREY;
  array1[currentIndex] = color;
  array1[currentIndex + 1] = color;

  colorSteps.push(array1);
  sortingSteps.push(array.slice());
}
