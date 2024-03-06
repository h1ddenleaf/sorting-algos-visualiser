export function* quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivot = yield* partition(arr, left, right);
    yield* quickSort(arr, left, pivot - 1);
    yield* quickSort(arr, pivot + 1, right);
  }
  yield { result: arr };
}

export function* partition(arr, low, right) {
  const pivot = arr[right];
  let lastIdx = low - 1;

  for (let i = low; i < right; i++) {
    const current = arr[i];
    yield {
      result: arr,
      colours: {
        swapIndices: [right, i, lastIdx + 1],
        colors: ["blue", current < pivot ? "green" : "yellow", "red"],
      },
    };
    if (current < pivot) {
      lastIdx++;
      const temp = arr[lastIdx];
      arr[lastIdx] = arr[i];
      arr[i] = temp;
    }
  }

  lastIdx++;
  yield {
    result: arr,
    colours: {
      swapIndices: [lastIdx, right],
      colors: ["red", "blue"],
    },
  };
  const temp = arr[lastIdx];
  arr[lastIdx] = arr[right];
  arr[right] = temp;
  yield {
    result: arr,
    colours: {
      swapIndices: [lastIdx, right],
      colors: ["blue", "red"],
    },
  };
  return lastIdx;
}
