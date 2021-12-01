function points(games) {
	let point;
	const result = games.map((num) => {
		if (Number(num.charAt(0)) > Number(num.charAt(2))) {
			return point = 3;
		} else if (Number(num.charAt(0)) === Number(num.charAt(2))) {
			return point = 1;
		} else {
			return point = 0;
		}
	})

	return result.reduce((x, y) => x + y);
}