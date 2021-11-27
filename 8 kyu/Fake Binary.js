function fakeBin(x) {
	let tmp = '';
	for (let i = 0; i < x.length; i++) {
		if (x[i] < '5') tmp += '0';
		else if (x[i] >= '5') tmp += '1';
	}
	return tmp;
}