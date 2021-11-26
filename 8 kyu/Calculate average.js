function find_average(array) {
	if (array.length == 0) return 0
	let result = array.reduce((a, b) => a + b);
	return result / array.length;
}