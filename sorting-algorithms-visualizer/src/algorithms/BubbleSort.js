const colorSteps = [];
const sortingSteps = [];

export function bubbleSort(array) {
  sortingSteps.push(array.slice());
  colorSteps.push(Array(array.length).fill("black"));

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      algorithmSteps(array.slice(), array.length, i, j, "red");

      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        algorithmSteps(array.slice(), array.length, i, j, "blue");
      }
    }
  }

  sortingSteps.push(array.slice());
  colorSteps.push(Array(array.length).fill("green"));

  return [sortingSteps, colorSteps];
}

function algorithmSteps(array, arrayLength, iteration, currentIndex, color) {
  const currentArray = Array(arrayLength - iteration).fill("black");

  currentArray[currentIndex] = color;
  currentArray[currentIndex + 1] = color;

  const sortedPositions = Array(arrayLength - (array.length - iteration)).fill(
    "green"
  );

  colorSteps.push(currentArray.concat(sortedPositions));
  sortingSteps.push(array.slice());
}
