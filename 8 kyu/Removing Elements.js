function removeEveryOther(arr) {
	return arr.filter((_, idx) => idx % 2 === 0);
}