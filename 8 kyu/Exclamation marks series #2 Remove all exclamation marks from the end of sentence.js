function remove(s) {
	let arr = []
	for (let i = s.length - 1; i => 0; i--) {
		if (s[i] != '!') {
			arr.push(s.slice(0, i + 1));
			return arr.join('');
		}
	}
}