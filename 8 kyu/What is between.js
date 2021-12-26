function between(a, b) {
	let result = [];
	let count = 0
	for (let i = a; i <= b; i++) {
		result[count] = i
		count++
	}
	return result
}