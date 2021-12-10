function createArray(number) {
	let newArray = [];

	for (let counter = 1; counter <= number;) {
		newArray.push(counter);
		counter++;
	}

	return newArray;
}