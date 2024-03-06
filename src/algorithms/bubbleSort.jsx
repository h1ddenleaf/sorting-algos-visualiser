export function* bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Out of position, yield twice
        swapped = true;
        yield {
          result: arr,
          colours: {
            swapIndices: [j, j + 1],
            colors: ["yellow", "green"],
          },
        };
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        yield {
          result: arr,
          colours: {
            swapIndices: [j, j + 1],
            colors: ["green", "yellow"],
          },
        };
      } else {
        // In correct order, yield once
        yield {
          result: arr,
          colours: {
            swapIndices: [j, j + 1],
            colors: ["yellow", "yellow"],
          },
        };
      }
    }
    // If no two elements were swapped in the inner loop, then the array is sorted
    if (!swapped) break;
  }
  return { result: arr };
}
