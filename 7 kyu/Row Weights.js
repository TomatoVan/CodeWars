function rowWeights(array){
  let oddSum = 0;
  let evenSum = 0;
  let result = [];
  for (let i = 1; i <= array.length; i++) {
    if (i % 2 == 1) oddSum += array[i - 1];
    else evenSum += array[i - 1];
  }
  return result = [oddSum, evenSum];
}