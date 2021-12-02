function countBy(x, n) {
	const result = []
	const limit = x * n

	for (let i = 1; i <= limit; i++) {
		if (i % x === 0) result.push(i)
	}

	return result
}