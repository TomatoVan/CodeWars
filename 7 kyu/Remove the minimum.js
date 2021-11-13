function removeSmallest(numbers) {
  
  const smallest = Math.min(...numbers);
  const smallestIndex = numbers.indexOf(smallest);
  const newArr = numbers.slice(0, smallestIndex).concat(numbers.slice(smallestIndex+1));
  console.log(newArr);
  return newArr;
}