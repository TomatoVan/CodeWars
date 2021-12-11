const rps = (p1, p2) => {
	const pattern = ['rock', 'paper', 'scissors'];
	const p1Index = pattern.findIndex((v) => v === p1);
	const p2Index = pattern.findIndex((v) => v === p2);

	if ((p1Index + 1) % 3 === p2Index) {
		return 'Player 2 won!';
	}
	if ((p1Index + 2) % 3 === p2Index) {
		return 'Player 1 won!';
	}

	return 'Draw!';
};