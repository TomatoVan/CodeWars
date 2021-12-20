function findDifference(a, b) {
	let mult1 = a.reduce((a, b) => a * b)
	let mult2 = b.reduce((a, b) => a * b)
	return Math.abs(mult1 - mult2)
}