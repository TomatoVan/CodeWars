function nextId(ids) {
	const arr = ids.filter((item, pos, self) => self.indexOf(item) === pos).sort((x, y) => x - y);

	if (arr[0] !== 0) {
		return 0;
	}

	for (let i = 0, j = 1; i <= arr.length; i += 1, j += 1) {
		if (arr[i] - arr[j] !== -1) {
			return arr[i] += 1;
		}
	}
}