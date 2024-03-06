export function* mergeSort(arr, i = 0, j = arr.length - 1) {
  const middle = Math.floor((j - i) / 2) + i;

  yield {
    result: arr,
    colours: {
      swapIndices: [i, middle, j],
      colors: ["yellow", "blue", "green"],
    },
  };
  if (j <= i) return { result: arr };

  yield* mergeSort(arr, i, middle);
  yield* mergeSort(arr, middle + 1, j);

  yield* merge(arr, i, middle, j);

  return { result: arr };
}

export function* merge(arr, i, middle, j) {
  let left = i;
  let mid = middle;
  let right = middle + 1;
  if (arr[middle] <= arr[right]) {
    return {
      result: arr,
      colours: {
        swapIndices: [middle, right],
        colors: ["yellow", "yellow"],
      },
    };
  }

  while (left <= mid && right <= j) {
    if (arr[left] < arr[right]) {
      yield {
        result: arr,
        colours: {
          swapIndices: [left, right],
          colors: ["yellow", "yellow"],
        },
      };
      left++;
    } else {
      let index = right;

      while (index !== left) {
        yield {
          result: arr,
          colours: {
            swapIndices: [left, right, index],
            colors: ["yellow", "blue", "green"],
          },
        };
        const temp = arr[index];
        arr[index] = arr[index - 1];
        arr[index - 1] = temp;
        index--;
      }
      yield {
        result: arr,
        colours: {
          swapIndices: [left + 1, right, index],
          colors: ["yellow", "blue", "yellow"],
        },
      };
      // Update all the pointers
      left++;
      mid++;
      right++;
    }
  }
  return { result: arr };
}
