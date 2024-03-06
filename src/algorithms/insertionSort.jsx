export function* insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j >= 1) {
      const left = j - 1;
      const right = j;
      const leftValue = arr[left];
      const rightValue = arr[right];

      yield {
        result: arr,
        colours: {
          swapIndices: [left, right, i],
          colors: [
            "yellow",
            leftValue > rightValue ? "green" : "yellow",
            "blue",
          ],
        },
      };

      if (leftValue <= rightValue) {
        break;
      }

      const temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return { result: arr };
}
