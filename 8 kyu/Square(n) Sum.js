function squareSum(numbers){
	return numbers.map((num) => Math.pow(num, 2)).reduce((x, y) => x + y, 0);
}