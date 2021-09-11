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
      algorithmSteps(array.slice(), array.length, i, j, Colors.RED);
      array[j + 1] = array[j];
      array[j] = firstUnsorted;
      algorithmSteps(array.slice(), array.length, i, j, Colors.BLUE);
      j--;
    }
  }

  sortingSteps.push(array.slice());
  colorSteps.push(Array(array.length).fill(Colors.GREEN));

  return [sortingSteps, colorSteps];
}

function algorithmSteps(array, arrayLength, iteration, currentIndex, color) {
  const currentArray = Array(arrayLength).fill(Colors.WHITE);
  const sortedPositions = Array(iteration).fill(Colors.GREEN);

  sortedPositions[iteration] = Colors.GREY;
  sortedPositions[currentIndex] = color;
  sortedPositions[currentIndex + 1] = color;

  colorSteps.push(sortedPositions.concat(currentArray));
  sortingSteps.push(array.slice());
}
