function mergeArrays(arr1, arr2) {
	let uniqueChars = [...new Set([...arr1, ...arr2])]
	return uniqueChars.sort((a, b) => a - b)
}