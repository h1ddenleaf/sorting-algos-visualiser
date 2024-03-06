function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randArray(numBars, maxHeight) {
  const array = [];
  for (let i = 0; i < numBars; i++) {
    array.push(randInt(5, maxHeight));
  }
  return array;
}
