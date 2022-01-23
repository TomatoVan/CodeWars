function arrayMadness(a, b) {
	let aTwo = a.map(m => m ** 2).reduce((a, b) => a + b, 0)
	let bThree = b.map(m => m ** 3).reduce((a, b) => a + b, 0)
	return aTwo > bThree
}